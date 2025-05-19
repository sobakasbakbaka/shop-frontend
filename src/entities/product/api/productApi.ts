import { axiosInstance } from "@/shared/api/axiosInstance";
import { type Product } from "../model/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance("/products");
  return response.data;
};

export const getProductByID = async (id: string): Promise<Product> => {
  const response = await axiosInstance(`/products/${id}`);
  return response.data;
};
