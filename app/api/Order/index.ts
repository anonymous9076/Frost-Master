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
        const response = await axiosInstance.post(
            "/createOrder",
            {
                product,
                paymentId,
                shippingAddress,
            }
        );
        return response.data;
    } catch (error: any) {
        console.error("Order creation failed:", error);
        return { error: true, message: error?.response?.data?.message || "Failed to create order" };
    }
};

// Get all orders for logged-in user
export const getAllOrders = async () => {
    try {
        const response = await axiosInstance.get("/getAllOrders");
        return response.data.data;
    } catch (error: any) {
        console.error("Failed to fetch orders:", error);
        return [];
    }
};

//get order details
export const getOrderDetails = async (orderId: string) => {
    try {
        const response = await axiosInstance.get(`/getOrderDetails/${orderId}`);
        return response.data.data;
    } catch (error: any) {
        console.error("Failed to fetch order details:", error);
        return null;
    }
};
