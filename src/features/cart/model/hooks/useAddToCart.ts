import { axiosInstance } from "@/shared/api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: number) => {
      await axiosInstance.post("/cart/add", {
        product_id: productId,
        quantity: 1,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
