"use client";

import { Button } from "@/shared/ui/button";
import { useAddToCart } from "../model/hooks/useAddToCart";
import { useCart } from "../model/hooks/useCart";
import { useMemo } from "react";
import { useCartIncrement } from "../model/hooks/useCartIncrement";
import { useCartDecrement } from "../model/hooks/useCartDecrement";

type AddToCartButtonProps = {
  productId: number;
};

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { mutate, isPending } = useAddToCart();
  const { data } = useCart();
  const { mutate: increment } = useCartIncrement(productId);
  const { mutate: decrement } = useCartDecrement(productId);

  const productQuantity = useMemo(() => {
    const product = data?.items.filter((item) => item.product_id === productId);
    return product?.[0]?.quantity as number;
  }, [productId, data?.items]);

  const handleAddToCart = () => {
    mutate(productId);
  };

  const handleIncrement = () => {
    increment({ quantity: productQuantity });
  };

  const handleDecrement = () => {
    decrement({ quantity: productQuantity });
  };

  return !!productQuantity ? (
    <div className={"flex items-center"}>
      <Button className={"px-4"} onClick={handleDecrement}>
        <p className={"text-1xl font-bold"}>-</p>
      </Button>
      <Button className={"px-4"} variant={"transparent"} disabled>
        <p className={"text-1xl font-bold"}>{productQuantity}</p>
      </Button>
      <Button className={"px-4"} onClick={handleIncrement}>
        <p className={"text-1xl font-bold"}>+</p>
      </Button>
    </div>
  ) : (
    <Button onClick={handleAddToCart} className={"px-4"}>
      {isPending ? "Добавляем..." : "В корзину"}
    </Button>
  );
};
