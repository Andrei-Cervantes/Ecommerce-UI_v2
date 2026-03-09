import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import ErrorText from "../ErrorText";
import { Button } from "../ui/button";
import UserService from "@/api/user";
import PasswordInput from "./PasswordInput";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { login } = UserService();

  const onLogin = (data: LoginFormData) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="space-y-4" noValidate>
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

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
