import { type CartItem as CartItemType } from "../model/types";
import Image from "next/image";
import { useRemoveFromCart } from "@/features/cart/model/hooks/useRemoveFromCart";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { mutate } = useRemoveFromCart();
  const product = item.products;

  const handleDelete = () => {
    mutate(product.id);
  };

  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <Image
        src={product.image_url}
        alt={product.name}
        width={80}
        height={80}
      />
      <div className="flex flex-col w-full h-full justify-between">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
          <p>
            ${product.price} × {item.quantity}
          </p>
        </div>
        <div>
          <Button
            variant={"transparent"}
            className={"text-red-400"}
            onClick={handleDelete}
          >
            Удалить
          </Button>
        </div>
      </div>
      <AddToCartButton productId={product.id} />
    </div>
  );
};
