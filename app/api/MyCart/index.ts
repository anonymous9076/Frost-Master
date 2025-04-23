import { axiosInstance } from "@/app/utlis/axiosConfig/AxiosInstance";

export async function showCartData(currentPage: number) {
  const data = await axiosInstance.get("/cart/getCart", {
    params: {
      pageNo: currentPage,
    },
  });
  return data.data;
}

export async function removeItemFromCart(cartId: string) {
  const data = await axiosInstance.delete(`/cart/removeItemFromCart/${cartId}`);
  return data.data;
}

export async function updateItemQuantityInCart(
  cartId: string,
  quantity: number
) {
  const data = await axiosInstance.put(
    `/cart/updateCart/${cartId}/${quantity}`
  );
  return data;
}
