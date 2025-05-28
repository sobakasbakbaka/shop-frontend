import { type CartItem as CartItemType } from "../model/types";
import Image from "next/image";
import { useRemoveFromCart } from "@/features/cart/model/hooks/useRemoveFromCart";
import { Button } from "@/shared/ui/button";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { mutate } = useRemoveFromCart();
  const product = item.products;

  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <Image
        src={product.image_url}
        alt={product.name}
        width={80}
        height={80}
      />
      <div className="flex-1">
        <h3 className="font-bold">{product.name || "Без названия"}</h3>
        <p>
          ${product.price} × {item.quantity}
        </p>
      </div>
      <Button onClick={() => mutate(product.id)} className={"px-4"}>
        Удалить
      </Button>
    </div>
  );
};
