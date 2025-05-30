import { type CartItem as CartItemType } from "@/entities/cart/model/types";
import { CartItem } from "@/entities/cart/ui/CartItem";

type CartListProps = {
  items: CartItemType[];
};

export const CartList = ({ items }: CartListProps) => {
  return (
    <div className={"flex flex-col gap-4 w-full"}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
