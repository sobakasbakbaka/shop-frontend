"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useCart } from "@/features/cart/model/hooks/useCart";
import { CartList } from "./__components/CartList";
import { CartSummary } from "./__components/CartSummary";

export const Cart = () => {
  const { data, isLoading } = useCart();
  const router = useRouter();

  const productsCount = useMemo(() => {
    return data?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Error...</div>;
  if (data.items.length <= 0) return <div>Корзина пуста</div>;

  const handleClick = () => router.push("/create-order");

  return (
    <div className={"p-4"}>
      <div className="relative inline-block">
        <h1 className="text-2xl font-bold mb-4 inline">Корзина</h1>
        {!!productsCount && (
          <span className="absolute -top-1 -right-4 text-xs font-semibold">
            {productsCount}
          </span>
        )}
      </div>
      <div className={"flex flex-row gap-8"}>
        <CartList items={data.items} />
        <CartSummary
          count={productsCount}
          total={data.total}
          onCheckout={handleClick}
        />
      </div>
    </div>
  );
};
