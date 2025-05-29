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
      width={300}
      height={300}
      alt={alt}
      className={"object-contain"}
    />
  );
};
