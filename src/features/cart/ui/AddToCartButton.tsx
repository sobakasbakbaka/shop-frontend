"use client";

import { Button } from "@/shared/ui/button";
import { useAddToCart } from "../model/hooks/useAddToCart";
import { useCart } from "../model/hooks/useCart";
import { useMemo } from "react";
import { useCartIncrement } from "../model/hooks/useCartIncrement";
import { useCartDecrement } from "../model/hooks/useCartDecrement";
import { CountButton } from "@/shared/ui/count-button";

type AddToCartButtonProps = {
  productId: number;
  className?: string;
};

export const AddToCartButton = ({
  productId,
  className,
}: AddToCartButtonProps) => {
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
    <CountButton
      count={productQuantity}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  ) : (
    <Button onClick={handleAddToCart} className={`px-4 ${className}`}>
      {isPending ? "Добавляем..." : "В корзину"}
    </Button>
  );
};
