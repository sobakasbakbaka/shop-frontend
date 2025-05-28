"use client";

import { CartItem } from "@/entities/cart/ui/CartItem";
import { useCart } from "@/features/cart/model/hooks/useCart";

export default function CartPage() {
  const { data, isLoading } = useCart();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Корзина пуста</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      <div className="flex flex-col gap-4">
        {data.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="text-right font-bold text-xl">Итого: ${data.total}</div>
      </div>
    </div>
  );
}
