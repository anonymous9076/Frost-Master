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

export const showProductSuggestion = async (
  productCategory: string,
  excludeProduct: string
) => {
  console.log(productCategory, excludeProduct, "excludeProductexcludeProduct");
  const res = await axiosInstance.get("/showProductSuggestion", {
    params: {
      productCategory,
      excludeProduct,
    },
  });
  return res.data;
};

export const addCategory = async (name: string) => {
  try {
    const res = await axiosInstance.post("/createCategory", { name });
    return res;
  } catch (error) {
    throw error;
  }
};
export const addSubCategory = async (name: string) => {
  try {
    const res = await axiosInstance.post("/createSubCategory", { name });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getCategory = async () => {
  try {
    const res = await axiosInstance.get("/categories");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getSubCategory = async () => {
  try {
    const res = await axiosInstance.get("/subcategories");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/deleteCategory/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSubCategory = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/deleteSubCategory/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
