import { useMutation } from "@tanstack/react-query";
import { signin } from "../api/Auth/route";

export function useSignin() {
  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: (userData) => {
      console.log("Sign-in successful. User data:", userData);
    },
    onError: (error) => {
      console.log("Error during sign-in:", error);
    },
  });
  return mutation;
}
