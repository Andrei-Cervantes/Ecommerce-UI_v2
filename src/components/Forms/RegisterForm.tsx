import z from "zod";
import UserService from "@/api/user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import ErrorText from "../ErrorText";
import { Button } from "../ui/button";
import PasswordInput from "./PasswordInput";
import { toast } from "sonner";

const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm Password must be at least 8 characters" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const { register: registerUser } = UserService();

  const onRegister = (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match", {
        description: "Please make sure both password fields match.",
      });
      return;
    }

    registerUser({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  };

  return (
    <form onSubmit={handleSubmit(onRegister)} noValidate className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            autoFocus
            type="text"
            placeholder="First Name"
            {...register("firstName")}
          />
          {errors.firstName && <ErrorText text={errors.firstName.message} />}
        </div>
        <div>
          <Input
            autoFocus
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
          />
          {errors.lastName && <ErrorText text={errors.lastName.message} />}
        </div>
      </div>
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
      <div>
        <PasswordInput
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorText text={errors.confirmPassword.message} />
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default RegisterForm;
