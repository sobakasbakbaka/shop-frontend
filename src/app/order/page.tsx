"use client";

import { useOrder } from "@/entities/order";
import { useSearchParams } from "next/navigation";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const { data: order, isError, isLoading } = useOrder({ session_id });

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Error...</p>;
  if (!order) return null;

  console.log("ORDER", order);

  return (
    <div>
      <h1>Спасибо за заказ!</h1>
      {order.items.map((orderItem) => (
        <div key={orderItem.id}>{orderItem.product.name}</div>
      ))}
    </div>
  );
}
