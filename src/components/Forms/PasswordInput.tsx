import { EyeOff, Eye } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";

interface PasswordInputProps {
  placeholder?: string;
}

const PasswordInput = ({ placeholder, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        className="absolute right-0 top-0 h-full px-3 hover:cursor-pointer hover:scale-105"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
};

export default PasswordInput;
