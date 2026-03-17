import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import ErrorText from "../ErrorText";
import { Button } from "../ui/button";
import PasswordInput from "./PasswordInput";
import { useLoginUser } from "@/hooks/useLoginUser";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUserStore } from "@/zustand/stores/UserStore";
import { Checkbox } from "../ui/checkbox";
import { useEffect, useState } from "react";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem("rememberMe") === "true";
  });
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const { mutate: loginUser, isPending } = useLoginUser();

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = (data: LoginFormData) => {
    loginUser(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (response) => {
          const user = response.user;

          // ✅ SAFE: use submitted data
          if (rememberMe) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem(
              "savedCredentials",
              JSON.stringify({
                email: data.email,
                password: data.password,
              }),
            );
          } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("savedCredentials");
          }

          setUser({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            token: response.accessToken,
          });

          toast.success("User logged in successfully!");

          navigate(user.isAdmin ? "/admin/products" : "/home");
        },
      },
    );
  };

  useEffect(() => {
    const savedCredentials = localStorage.getItem("savedCredentials");

    if (savedCredentials) {
      try {
        const credentials = JSON.parse(savedCredentials);

        setValue("email", credentials.email);
        setValue("password", credentials.password);
      } catch (error) {
        console.error("Error parsing saved credentials:", error);
        localStorage.removeItem("savedCredentials");
      }
    }
  }, [setValue]);

  const handleRememberMeChange = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true;
    setRememberMe(isChecked);

    if (!isChecked) {
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("savedCredentials");
    } else {
      const email = getValues("email"); // get current email value
      localStorage.setItem("rememberMe", "true");
      localStorage.setItem("savedCredentials", JSON.stringify({ email }));
    }
  };
  // useEffect(() => {
  //   if (!rememberMe) return;

  //   const subscription = watch((value) => {
  //     localStorage.setItem(
  //       "savedCredentials",
  //       JSON.stringify({
  //         email: value.email,
  //       }),
  //     );
  //   });

  //   return () => subscription.unsubscribe();
  // }, [rememberMe, watch]);

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="space-y-4 w-full"
      noValidate
    >
      <div>
        <Input
          autoFocus
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <ErrorText text={errors.email.message} />}
      </div>
      <div className="space-y-2">
        <PasswordInput placeholder="Password" {...register("password")} />
        {errors.password && <ErrorText text={errors.password.message} />}
        <div className="flex gap-2 items-center px-2">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
      </div>

      <Button type="submit" disabled={isPending} className="w-full mt-8">
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
