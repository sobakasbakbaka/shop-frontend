"use client";

import { CartItem } from "@/entities/cart/ui/CartItem";
import { useCart } from "@/features/cart/model/hooks/useCart";
import { useCheckout } from "@/features/cart/model/hooks/useCheckout";
import { Button } from "@/shared/ui/button";

export default function CartPage() {
  const { data, isLoading } = useCart();
  const { mutate, isPending } = useCheckout();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error...</div>;
  }

  if (data.items.length <= 0) {
    return <div>Корзина пуста</div>;
  }

  const handleClick = () => {
    mutate();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      <div className="flex flex-col gap-4">
        {data.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="text-right font-bold text-xl">Итого: ${data.total}</div>
        <Button onClick={handleClick}>
          {isPending ? "Оформляем..." : "Оформить заказ"}
        </Button>
      </div>
    </div>
  );
}
