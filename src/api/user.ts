import { useAxios } from "@/hooks/useAxios";
import type { IUserRegisterRequest } from "@/types/IUser";
import { ENDPOINTS } from "./endpoints";

const UserService = () => {
  const { POST } = useAxios();

  const register = async (userData: IUserRegisterRequest) => {
    try {
      const response = await POST({
        url: ENDPOINTS.USER.REGISTER,
        data: userData,
      });

      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  return {
    register,
  };
};

export default UserService;
