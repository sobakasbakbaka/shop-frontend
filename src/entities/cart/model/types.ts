export type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
  stock: number;
};

export type CartItem = {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  products: Product;
  created_at: string;
};

export type Cart = {
  total: number;
  items: CartItem[];
};
