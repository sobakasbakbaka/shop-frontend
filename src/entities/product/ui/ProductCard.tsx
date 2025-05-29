import Link from "next/link";
import { Product } from "../model/types";
import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const isOutOfStock = product.stock === 0;

  return (
    <Link href={`/products/${product.id}`}>
      <div className={"bg-white rounded-3xl p-4"}>
        <div
          className={
            "aspect-square bg-black/10 rounded-2xl flex items-center justify-center overflow-hidden"
          }
        >
          {isOutOfStock && <div className={"absolute w-64 h-64 bg-white/65"} />}
          {isOutOfStock && (
            <div className={"absolute text-lg font-semibold"}>
              Нет в наличие :{"("}
            </div>
          )}
          <ProductImage src={product.image_url} alt={product.name} />
        </div>
        <div className={"pt-4 flex flex-col gap-1"}>
          <ProductInfo
            name={product.name}
            price={product.price}
            isOutOfStock={isOutOfStock}
          />
          {isOutOfStock ? null : (
            <AddToCartButton productId={product.id} className={"w-fit"} />
          )}
        </div>
      </div>
    </Link>
  );
};
