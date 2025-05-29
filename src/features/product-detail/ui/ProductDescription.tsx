type ProductDescriptionProps = {
  description: string;
};

export const ProductDescription = ({
  description,
}: ProductDescriptionProps) => {
  return (
    <>
      <h1 className={"text-2xl font-bold mb-4"}>Описание</h1>
      <p>{description}</p>
    </>
  );
};
