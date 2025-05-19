"use client";

import { useProductByID } from "../model/useProductByID";

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

  return (
    <div>
      {!!data?.image_url.length && <img src={data.image_url} alt="picture" />}
      <h1>{data?.name}</h1>
      <p>Price: {data?.price}</p>
    </div>
  );
};
