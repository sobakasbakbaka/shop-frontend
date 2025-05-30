import { Divider } from "@/shared/ui/divider";
import { useCreateOrderStore } from "../../model/store";
import { Button } from "@/shared/ui/button";
import { useCheckout } from "@/features/cart/model/hooks/useCheckout";
import { Box } from "@/shared/ui/box";

export const StepSummary = () => {
  const { address, user, payment } = useCreateOrderStore();
  const { mutate } = useCheckout();

  const handleClick = () => {
    mutate();
  };

  return (
    <Box>
      <h1>Данные получателя</h1>
      <div>
        <p>Имя: {user?.name}</p>
        <p>Фамилия: {user?.surname}</p>
        <p>Номер телефона: {user?.phone}</p>
      </div>
      <Divider />
      <div>
        <p>Город: {address?.city}</p>
        <p>Улица: {address?.street}</p>
      </div>
      <Divider />
      <div>
        <p>Способ оплаты: картой</p>
        <p>Номер карты: {payment?.number}</p>
      </div>
      <Divider />
      <Button onClick={handleClick}>Все верно, к оплате</Button>
    </Box>
  );
};
