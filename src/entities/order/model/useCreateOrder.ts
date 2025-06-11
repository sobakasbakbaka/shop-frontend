import { axiosInstance } from "@/shared/api/axiosInstance";
import { AddressData, UserData } from "@/widgets/create-order/model/store";
import { useMutation } from "@tanstack/react-query";

type UseCreateOrderProps = {
  address?: AddressData;
  user?: UserData;
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: async ({
      address,
      user,
    }: UseCreateOrderProps): Promise<{ sessionId: string }> => {
      const { data } = await axiosInstance.post<{ sessionId: string }>(
        "/create-checkout-session",
        {
          ...address,
          first_name: user?.name,
          last_name: user?.surname,
          phone: user?.phone,
        }
      );

      return data;
    },
  });
};
