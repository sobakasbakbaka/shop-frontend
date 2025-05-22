"use client";

import { useProducts } from "../model/useProducts";
import { ProductCard } from "@/entities/product/ui/ProductCard";

export const ProductList = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className={"grid grid-cols-4 gap-8"}>
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
