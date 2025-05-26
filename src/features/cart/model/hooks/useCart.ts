import { CartItem } from "@/entities/cart/model/types";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  return useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/cart/");
      return data;
    },
  });
};
