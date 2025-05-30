import { AddToCartButton } from "@/features/cart/ui/AddToCartButton";
import { Box } from "@/shared/ui/box";

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
    <Box>
      {stock === 0 ? (
        <p className="text-2xl font-bold">Товар закончился :{"("}</p>
      ) : (
        <>
          <p className="text-2xl font-bold">$ {price}</p>
          <AddToCartButton productId={+productId} />
        </>
      )}
    </Box>
  );
};
