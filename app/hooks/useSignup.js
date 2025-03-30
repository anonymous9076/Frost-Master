import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/Auth/route";

export function useSignin() {
  const mutation = useMutation({ mutationFn: signup });
  return mutation;
}
