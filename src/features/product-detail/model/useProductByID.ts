import { getProductByID } from "@/entities/product/api/productApi";
import { Product } from "@/entities/product/model/types";
import { useQuery } from "@tanstack/react-query";

export const useProductByID = (id: string) => {
  return useQuery<Product>({
    queryKey: ["produc"],
    queryFn: () => getProductByID(id),
    enabled: !!id,
  });
};
