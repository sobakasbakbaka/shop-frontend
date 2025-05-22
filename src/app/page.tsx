import { ProductList } from "@/features/product-list/ui/ProductList";
import { Button } from "@/shared/ui/button";
import { Divider } from "@/shared/ui/divider";

export default function HomePage() {
  return (
    <main>
      <h1>products</h1>
      <Button>Filled</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"transparent"}>Transparent</Button>
      <Divider />
      <ProductList />
    </main>
  );
}
