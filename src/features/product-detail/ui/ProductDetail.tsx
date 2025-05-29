"use client";

import { useProductByID } from "../model/useProductByID";
import { ProductImage } from "./ProductImage";
import { ProductBuyBox } from "./ProductBuyBox";
import { ProductDescription } from "./ProductDescription";

type ProductDetailProps = {
  productId: string;
};

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { data, error, isLoading } = useProductByID(productId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className={"flex flex-col gap-4"}>
      <h1 className={"text-2xl font-bold mb-4"}>{data?.name}</h1>
      <div className={"flex flex-row justify-between"}>
        <ProductImage src={data.image_url} alt={data.name} />
        <ProductBuyBox
          stock={data.stock}
          price={data.price}
          productId={data.id}
        />
      </div>
      <ProductDescription description={data.description} />
    </div>
  );
};
