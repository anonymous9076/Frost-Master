import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export async function showCartData() {
  const data = await axiosInstance.get("/cart/getCart");
  return data.data;
}
