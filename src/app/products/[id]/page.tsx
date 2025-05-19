import { ProductDetail } from "@/features/product-detail/ui/ProductDetail";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return <ProductDetail productId={id} />;
}
