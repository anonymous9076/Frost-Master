import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

// s : 1
export const createRazorpayOrder = async (
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
    const response = await axiosInstance.post("/payment/createRazorpayOrder", {
      shippingAddress,
    });
    return response.data;
  } catch (error: any) {
    console.error("Failed to create Razorpay order:", error);
    return {
      error: true,
      message:
        error?.response?.data?.message || "Failed to create Razorpay order",
    };
  }
};

// verify pay
export const verifyPayment = async (
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string,
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
    const response = await axiosInstance.post("/payment/verifyPayment", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      shippingAddress,
    });
    return response.data;
  } catch (error: any) {
    console.error("Payment verification failed:", error);
    return {
      error: true,
      message:
        error?.response?.data?.message || "Payment verification failed",
    };
  }
};

// cod
export const placeCODOrder = async (
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
    const response = await axiosInstance.post("/payments/cod", {
      shippingAddress,
    });
    return response.data;
  } catch (error: any) {
    console.error("COD order failed:", error);
    return {
      error: true,
      message: error?.response?.data?.message || "COD order failed",
    };
  }
};
