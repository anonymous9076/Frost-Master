import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

// Submit a review
export const createReview = async (
    productId: string,
    ratings: number,
    comment: string
) => {
    try {
        const response = await axiosInstance.post(
            "/createReview",
            { productId, ratings, comment },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return response.data;
    } catch (error: any) {
        return {
            error: true,
            message: error?.response?.data?.message || "Review submission failed",
        };
    }
};

// Get recent reviews for customer page
export const getProductReviews = async (productId: string) => {
    try {
        const response = await axiosInstance.get(
            `/getReviewForCustomerPage/${productId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return response.data.reviews;
    } catch (error: any) {
        return [];
    }
};
