import Link from "next/link";
import { Product } from "../model/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={"bg-white rounded-3xl p-4"}>
        <div
          className={
            "aspect-square bg-black/10 rounded-2xl flex items-center justify-center overflow-hidden"
          }
        >
          {!!product.image_url.length && (
            <img
              src={product.image_url}
              alt={product.name}
              className={"w-full h-full object-contain"}
            />
          )}
        </div>

        <div className={"pt-4"}>
          <p className={"text-lg font-semibold"}>{product.name}</p>
          <p className={"mt-2 text-xl font-bold"}>${product.price}</p>
        </div>
      </div>
    </Link>
  );
};
