import { Divider } from "@/shared/ui/divider";
import { useCreateOrderStore } from "../../model/store";
import { Button } from "@/shared/ui/button";
import { Box } from "@/shared/ui/box";
import { useCreateCheckout } from "@/features/order";

export const StepSummary = () => {
  const { address, user } = useCreateOrderStore();

  const handleClick = useCreateCheckout();

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
      <Button onClick={handleClick}>Все верно, к оплате</Button>
    </Box>
  );
};
