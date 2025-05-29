import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";

type ProductBuyBoxProps = {
  price: number;
  stock: number;
  productId: number;
};

export const ProductBuyBox = ({
  stock,
  price,
  productId,
}: ProductBuyBoxProps) => {
  return (
    <div
      className={"w-80 h-fit p-4 flex flex-col gap-2 bg-slate-100 rounded-2xl"}
    >
      {stock === 0 ? (
        <p className="text-2xl font-bold">Товар закончился</p>
      ) : (
        <>
          <p className="text-2xl font-bold">$ {price}</p>
          <AddToCartButton productId={+productId} />
        </>
      )}
    </div>
  );
};
