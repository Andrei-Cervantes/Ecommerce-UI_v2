import { useAxios } from "@/hooks/useAxios";
import { ENDPOINTS } from "./endpoints";
import { toast } from "sonner";

const OrderService = () => {
  const { GET, POST } = useAxios();

  const checkout = async () => {
    try {
      const response = await POST({
        url: ENDPOINTS.ORDER.CHECKOUT,
      });

      return response.data;
    } catch (error) {
      toast.error("Checkout failed. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const getUserOrders = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.ORDER.GET_USER_ORDERS,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch orders. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  // Admin-only endpoint - requires token
  const getAllOrders = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.ORDER.GET_ALL_ORDERS,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch orders. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  return { checkout, getUserOrders, getAllOrders };
};

export default OrderService;
