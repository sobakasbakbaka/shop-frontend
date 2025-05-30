import { Box } from "@/shared/ui/box";
import { Button } from "@/shared/ui/button";
import { Divider } from "@/shared/ui/divider";

type CartSummaryProps = {
  total: number;
  count: number;
  onCheckout: () => void;
};

export const CartSummary = ({ total, count, onCheckout }: CartSummaryProps) => {
  return (
    <Box>
      <div className={"flex flex-row justify-between"}>
        <p className={"text-sm font-bold"}>Корзина</p>
        <p className={"text-sm text-gray-400"}>{count} товар</p>
      </div>
      <div className={"flex flex-row justify-between"}>
        <p className={"text-sm"}>Товары {`(${count})`}</p>
        <p className={"text-sm"}>$ {total}</p>
      </div>
      <div className={"flex flex-row justify-between"}>
        <p className={"text-sm"}>Скидка</p>
        <p className={"text-sm"}>$ 0</p>
      </div>
      <Divider />
      <div className={"flex flex-row justify-between"}>
        <p className={"font-bold text-xl"}>Итого:</p>
        <p className={"font-bold text-xl"}>$ {total}</p>
      </div>
      <Button onClick={onCheckout}>Перейти к оформлению</Button>
    </Box>
  );
};
