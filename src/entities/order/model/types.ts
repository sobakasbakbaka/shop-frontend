import { Product } from "@/entities/product/model/types";

export type OrderItem = {
  id: number;
  product_id: number;
  product: Product;
  quantity: number;
  price: number;
};

export type Order = {
  id: number;
  user_id: number;
  total: number;
  items: OrderItem[];
  created_at: string;
};
