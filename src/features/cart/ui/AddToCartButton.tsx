"use client";

import { Button } from "@/shared/ui/button";
import { useAddToCart } from "../model/hooks/useAddToCart";

type AddToCartButtonProps = {
  productId: number;
};

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { mutate, isPending } = useAddToCart();

  const handleClick = () => {
    mutate(productId);
  };

  return (
    <Button onClick={handleClick} className={"px-4"}>
      {isPending ? "Добавляем..." : "В корзину"}
    </Button>
  );
};
