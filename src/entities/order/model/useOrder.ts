import { axiosInstance } from "@/shared/api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Order } from "./types";

type UseOrderProps = {
  session_id: string | null;
};

export const useOrder = ({ session_id }: UseOrderProps) => {
  return useQuery<Order>({
    queryKey: ["order"],
    queryFn: async () => {
      const { data } = await axiosInstance(
        `/get-order-by-session?session_id=${session_id}`
      );
      return data;
    },
  });
};
