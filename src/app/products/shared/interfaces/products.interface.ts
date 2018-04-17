export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  totalPrice?: number;
  img?: string;
  quantity?: number;
  available?: boolean;
}
