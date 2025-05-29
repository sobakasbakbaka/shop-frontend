import { axiosInstance } from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UpdateCartArgs = {
  quantity: number;
};

export const useCartIncrement = (productId: number) => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, UpdateCartArgs>({
    mutationFn: async ({ quantity }) => {
      await axiosInstance.put(`/cart/${productId}`, {
        quantity: quantity + 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
