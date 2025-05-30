"use client";

import { Button } from "@/shared/ui/button";
import { useAddToCart } from "../model/hooks/useAddToCart";
import { useCart } from "../model/hooks/useCart";
import { MouseEvent, useMemo } from "react";
import { useCartIncrement } from "../model/hooks/useCartIncrement";
import { useCartDecrement } from "../model/hooks/useCartDecrement";
import { CountButton } from "@/shared/ui/count-button";
import { useRemoveFromCart } from "../model/hooks/useRemoveFromCart";

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
  const { mutate: deleteProduct } = useRemoveFromCart();

  const productInfo = useMemo(() => {
    const product = data?.items.filter((item) => item.product_id === productId);

    return {
      quantity: product?.[0]?.quantity as number,
      stock: product?.[0]?.products.stock as number,
    };
  }, [productId, data?.items]);

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    mutate(productId);
  };

  const handleIncrement = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    increment({ quantity: productInfo.quantity });
  };

  const handleDecrement = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (productInfo.quantity === 1) {
      deleteProduct(productId);
    } else {
      decrement({ quantity: productInfo.quantity });
    }
  };

  return !!productInfo.quantity ? (
    <CountButton
      minValue={0}
      maxValue={productInfo.stock}
      count={productInfo.quantity}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  ) : (
    <Button onClick={handleAddToCart} className={`px-4 ${className}`}>
      {isPending ? "Добавляем..." : "В корзину"}
    </Button>
  );
};
