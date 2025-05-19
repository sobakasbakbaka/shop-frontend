import Link from "next/link";
import { Product } from "../model/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div style={{ border: "1px solid white" }}>
      <Link href={`/products/${product.id}`}>
        {!!product.image_url.length && (
          <img
            src={product.image_url}
            width={150}
            height={200}
            alt="product image"
          />
        )}
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
};
