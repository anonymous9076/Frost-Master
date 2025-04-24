import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export const getAllProducts = async (
  category?: string[],
  searchProduct?: string,
  minPrice?: number,
  maxPrice?: number,
  filterRating?: number[],
  pageNo?: number
) => {
  try {
    const data = await axiosInstance.get("/getAll", {
      params: {
        category,
        searchProduct,
        minPrice,
        maxPrice,
        filterRating,
        pageNo,
      },
    });
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error: true };
  }
};

export const showProductDetails = async (productId: string) => {
  try {
    const data = await axiosInstance.get(`/getProductById/${productId}`);
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return { error: true };
  }
};

export const getProductSuggestions = async (
  productCategory: string,
  excludeProduct: string
) => {
  try {
    const response = await axiosInstance.get("/showProductSuggestion", {
      params: {
        productCategory,
        excludeProduct,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getting product suggestions:", error);
    return [];
  }
};

export const showProductSpec = async (productId: string) => {
  const res = await axiosInstance.get("/showProductSpec", {
    params: { productId },
  });
  return res.data;
};
