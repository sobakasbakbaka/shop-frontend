import { axiosInstance } from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCheckout = () => {
  const quertClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await axiosInstance.post("/cart/checkout");
    },
    onSuccess: () => {
      quertClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
