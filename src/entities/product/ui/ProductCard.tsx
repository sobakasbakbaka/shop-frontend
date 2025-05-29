import Link from "next/link";
import { Product } from "../model/types";
import Image from "next/image";
import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";

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
            <Image
              src={product.image_url}
              alt={product.name}
              width={256}
              height={256}
              className={"w-full h-full object-contain"}
            />
          )}
        </div>
        <div className={"pt-4 flex flex-col gap-1"}>
          <p className={"text-lg font-semibold line-clamp-1"}>{product.name}</p>
          <p className={"text-xl font-bold"}>${product.price}</p>
          <AddToCartButton productId={product.id} className={"w-fit"} />
        </div>
      </div>
    </Link>
  );
};
