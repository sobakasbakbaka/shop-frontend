"use client";

import { OrderItem, useOrders } from "@/entities/order";

export default function OrdersPage() {
  const { data, isLoading, isError } = useOrders();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1 className={"text-2xl font-bold mb-4"}>История заказов</h1>
      {data.map((order) => (
        <OrderItem key={order.id} item={order} />
      ))}
    </div>
  );
}
