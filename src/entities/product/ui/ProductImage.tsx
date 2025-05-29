import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
};

export const ProductImage = ({ src, alt }: ProductImageProps) => {
  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={256}
      height={256}
      className={"w-full h-full object-contain"}
    />
  );
};
