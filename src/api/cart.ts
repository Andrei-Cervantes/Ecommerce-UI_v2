import { useAxios } from "@/hooks/useAxios";
import { ENDPOINTS } from "./endpoints";
import { toast } from "sonner";
import type { IUpdateCartRequest } from "@/types/ICart";

const CartService = () => {
  const { GET, POST, PUT, PATCH } = useAxios();

  const getCard = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.CART.GET_CART,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch cart. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const addToCart = async (cartData: IUpdateCartRequest) => {
    try {
      const response = await POST({
        url: ENDPOINTS.CART.ADD_TO_CART,
        data: cartData,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to add items to cart. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const updateCartQuantity = async (cartData: IUpdateCartRequest) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.CART.UPDATE_CART_QUANTITY,
        data: cartData,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to update cart quantity. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const removeFromCart = async (productId: string) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.CART.REMOVE_FROM_CART(productId),
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to remove item from cart. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      const response = await PUT({
        url: ENDPOINTS.CART.CLEAR_CART,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to clear cart. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  return {
    getCard,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  };
};

export default CartService;
