type ProductInfoProps = {
  name: string;
  price: number;
  isOutOfStock: boolean;
};

export const ProductInfo = ({
  name,
  price,
  isOutOfStock,
}: ProductInfoProps) => {
  return (
    <>
      <p className={"text-lg font-semibold line-clamp-1"}>{name}</p>
      {isOutOfStock ? (
        <p className={"text-lg line-clamp-1"}>Товар закончился :{"("}</p>
      ) : (
        <p className={"text-xl font-bold"}>$ {price}</p>
      )}
    </>
  );
};
