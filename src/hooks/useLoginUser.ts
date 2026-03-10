import { useMutation } from "@tanstack/react-query";
import UserService from "@/api/user";

export const useLoginUser = () => {
  const { login } = UserService();

  return useMutation({
    mutationFn: login,
  });
};
