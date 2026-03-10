import { useMutation } from "@tanstack/react-query";
import UserService from "@/api/user";

export const useRegisterUser = () => {
  const { register } = UserService();

  return useMutation({
    mutationFn: register,
  });
};
