import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface ProductTypes {
  userId: string;
  productId: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
}

export interface CartState {
  cartData: ProductTypes[];
  addProductIntoCart: (product: ProductTypes) => void;
  removeProductFromCart: (productId: string) => void;
  updateProductInCart: (productId: string, itemCount: number) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cartData: [],
        addProductIntoCart: (product) =>
          set((state) => ({
            cartData: [...state.cartData, product],
          })),
        removeProductFromCart: (productId) =>
          set((state) => ({
            cartData: state.cartData.filter(
              (product) => product.productId !== productId
            ),
          })),
        updateProductInCart: (productId, itemCount) =>
          set((state) => ({
            cartData: state.cartData.map((product) => {
              if (product.productId === productId) {
                return {
                  ...product,
                  quantity: itemCount,
                };
              }
              return product;
            }),
          })),
      }),
      {
        name: "carts",
      }
    )
  )
);
