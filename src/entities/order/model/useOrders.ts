import { axiosInstance } from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Order } from "./types";

export const useOrders = () => {
  return useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data } = await axiosInstance("/orders/mine");
      return data;
    },
  });
};
