"use client";

import Link from "next/link";
import { useProducts } from "../model/useProducts";

export const ProductList = () => {
  const { data, error, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <p>Name: {product.name}</p>
          </Link>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};
