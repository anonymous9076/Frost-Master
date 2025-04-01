import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export const showCustomers = async (userName: string, currentPage: number) => {
  try {
    const data = await axiosInstance.get("/admin/getAllUsers", {
      params: {
        userName: userName,
        pageNo: currentPage,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const showProducts = async () => {
  try {
    const data = await axiosInstance.get("/showProducts");
    console.log(data, "product data");
  } catch (error) {}
};

export const showOrders = async () => {
  try {
  } catch (error) {}
};

export const showEnquires = async (sortBy: string, pageNo: number) => {
  try {
    const data = await axiosInstance.get("/admin/getAllEnquiries", {
      params: {
        sortBy: sortBy,
        pageNo: pageNo,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const showPayments = async () => {
  try {
  } catch (error) {}
};
