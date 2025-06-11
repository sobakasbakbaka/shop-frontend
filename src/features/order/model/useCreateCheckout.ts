import { useCreateOrder } from "@/entities/order";
import { stripePromise } from "../lib/createOrderSession";
import { useCreateOrderStore } from "@/widgets/create-order/model/store";

export const useCreateCheckout = () => {
  const { address, user } = useCreateOrderStore();
  const { mutateAsync } = useCreateOrder();

  return async () => {
    try {
      const { sessionId } = await mutateAsync({ address, user });
      const stripe = await stripePromise;

      const result = await stripe?.redirectToCheckout({ sessionId });

      if (result?.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Ошибка при создание заказа", error);
    }
  };
};
