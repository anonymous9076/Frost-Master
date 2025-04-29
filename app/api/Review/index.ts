import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

// Submit a review
export const createReview = async (
  productId: string,
  ratings: number,
  comment: string
) => {
  try {
    const response = await axiosInstance.post("/createReview", {
      productId,
      ratings,
      comment,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    // if (error?.isAuthError) {
    //     return { error: true, message: "Please log in to submit a review." };
    // }

    return { error: true, message: "Failed to submit review" };
  }
};
// Get recent reviews for customer page
export const getProductReviews = async (productId: string) => {
  try {
    const response = await axiosInstance.get(
      `/getReviewForCustomerPage/${productId}`
    );
    return response.data.reviews;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getHomePageReviews = async () => {
  try {
    const res = await axiosInstance.get("/getReview");
    return res.data;
  } catch (error) {
    return error;
  }
};
