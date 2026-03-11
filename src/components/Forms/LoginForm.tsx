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

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const { mutate: loginUser, isPending } = useLoginUser();

  const {
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

          setUser({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            token: response.accessToken,
          });

          toast.success("User logged in successfully!");

          if (response.user.isAdmin) {
            navigate("/admin/products");
          } else {
            navigate("/home");
          }
        },
      },
    );
  };

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
      <div>
        <PasswordInput placeholder="Password" {...register("password")} />
        {errors.password && <ErrorText text={errors.password.message} />}
      </div>

      <Button type="submit" disabled={isPending} className="w-full mt-8">
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
