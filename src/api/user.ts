import { useAxios } from "@/hooks/useAxios";
import type {
  IUserLoginRequest,
  IUserRegisterRequest,
  IUserLoginResponse,
} from "@/types/IUser";
import { ENDPOINTS } from "./endpoints";
import { toast } from "sonner";

const UserService = () => {
  const { GET, POST, PATCH } = useAxios();

  const register = async (userData: IUserRegisterRequest) => {
    try {
      const response = await POST({
        url: ENDPOINTS.USER.REGISTER,
        data: userData,
      });

      return response.data;
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const login = async (userData: IUserLoginRequest) => {
    try {
      const response = await POST<IUserLoginResponse>({
        url: ENDPOINTS.USER.LOGIN,
        data: userData,
      });

      return response.data;
    } catch (error) {
      toast.error(
        "Login failed. Please check your credentials and try again.",
        {
          description: `${error || "An unexpected error occurred."}`,
        },
      );
      throw error;
    }
  };

  // authenticated endpoints - requires token
  const updatePassword = async (password: string) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.USER.UPDATE_PASSWORD,
        data: { password },
      });

      return response.data;
    } catch (error) {
      toast.error("Password update failed. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const setAsAdmin = async (userId: string) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.USER.SET_ADMIN(userId),
        data: { userId },
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to set user as admin. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.USER.GET_USER,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch user details. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  return {
    register,
    login,
    updatePassword,
    setAsAdmin,
    getUserDetails,
  };
};

export default UserService;
