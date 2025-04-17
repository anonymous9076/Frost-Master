import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";
//create order
export const createOrder = async (
  product: { productId: string; quantity: number }[],
  paymentId: string,
  shippingAddress: {
    fullName: string;
    phone: string;
    addressLine1: string;
    city: string;
    pincode: string;
    state: string;
  }
) => {
  try {
    const response = await axiosInstance.post("/createOrder", {
      product,
      paymentId,
      shippingAddress,
    });
    return response.data;
  } catch (error) {
    console.error("Order creation failed:", error);
    return {
      error: true,
      // message: error?.response?.data?.message || "Failed to create order",
    };
  }
};

// Get all orders for logged-in user
export const getAllOrders = async (pageNo: number) => {
  try {
    const response = await axiosInstance.get("/getAllOrders", {
      params: {
        pageNo,
      },
    });
    console.log(response, "res yah ape hu main");
    return response.data;
  } catch (error) {
    console.log("Failed to fetch orders:", error);
    return [];
  }
};

//get order details
export const getOrderDetails = async (orderId: string) => {
  try {
    const response = await axiosInstance.get(`/getOrderDetails/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch order details:", error);
    return null;
  }
};
