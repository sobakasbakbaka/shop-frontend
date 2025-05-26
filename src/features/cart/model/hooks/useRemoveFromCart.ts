import { axiosInstance } from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: number) => {
      await axiosInstance.delete(`/cart/${productId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
