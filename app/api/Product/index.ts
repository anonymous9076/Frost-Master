import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export const getAllProducts = async (
    category?: string,
    material?: string,
    minPrice?: number,
    maxPrice?: number
) => {
    try {
        const data = await axiosInstance.get("/getAll", {
            params: {
                category,
                material,
                minPrice,
                maxPrice,
            },
        });
        return data.data;
    } catch (error: any) {
        console.error("Error fetching products:", error);
        return { error: true, message: error.message };
    }
};

export const showProductDetails = async (productId: string) => {
    try {
        const data = await axiosInstance.get(`/getProductById/${productId}`);
        return data.data;
    } catch (error: any) {
        console.error("Error fetching product:", error);
        return { error: true, message: error.message };
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
    } catch (error: any) {
        console.error("Error getting product suggestions:", error);
        return [];
    }
};

