import { useAxios } from "@/hooks/useAxios";
import { ENDPOINTS } from "./endpoints";
import type { ICreateProductRequest } from "@/types/IProduct";
import { toast } from "sonner";

const ProductService = () => {
  const { GET, POST, PATCH } = useAxios();

  // Admin-only endpoint - requires token
  const createProduct = async (productData: ICreateProductRequest) => {
    try {
      const response = await POST({
        url: ENDPOINTS.PRODUCT.CREATE_PRODUCT,
        data: productData,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to create product. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const getAllActiveProducts = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.PRODUCT.GET_ALL_ACTIVE_PRODUCTS,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  // Admin-only endpoint - requires token
  const getAllProducts = async () => {
    try {
      const response = await GET({
        url: ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS,
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const getProductById = async (productId: string) => {
    try {
      const response = await GET({
        url: ENDPOINTS.PRODUCT.GET_PRODUCT_BY_ID(productId),
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to fetch product. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  // Admin-only endpoint - requires token
  const updateProduct = async (
    productId: string,
    productData: ICreateProductRequest,
  ) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.PRODUCT.UPDATE_PRODUCT(productId),
        data: productData,
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to update product. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  // Admin-only endpoint - requires token
  const archiveProduct = async (productId: string) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.PRODUCT.ARCHIVE_PRODUCT(productId),
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to archive product. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  // Admin-only endpoint - requires token
  const activateProduct = async (productId: string) => {
    try {
      const response = await PATCH({
        url: ENDPOINTS.PRODUCT.ACTIVATE_PRODUCT(productId),
      });

      return response.data;
    } catch (error) {
      toast.error("Failed to activate product. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const searchProductsByName = async (name: string) => {
    try {
      const response = await GET({
        url: ENDPOINTS.PRODUCT.SEARCH_BY_NAME,
        params: { name },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to search products. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  const searchProductsByPrice = async (minPrice: number, maxPrice: number) => {
    try {
      const response = await GET({
        url: ENDPOINTS.PRODUCT.SEARCH_BY_PRICE,
        params: { minPrice, maxPrice },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to search products. Please try again.", {
        description: `${error || "An unexpected error occurred."}`,
      });
      throw error;
    }
  };

  return {
    createProduct,
    getAllActiveProducts,
    getAllProducts,
    getProductById,
    updateProduct,
    archiveProduct,
    activateProduct,
    searchProductsByName,
    searchProductsByPrice,
  };
};

export default ProductService;
