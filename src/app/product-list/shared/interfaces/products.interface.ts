export interface Product {
  name: string;
  description: string;
  price: number;
  totalPrice?: number;
  img?: string;
  quantity?: number;
  available: boolean;
}
