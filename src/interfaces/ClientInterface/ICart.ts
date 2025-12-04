export interface CartItemToAdd {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  title: string;
  description: string;
  qty?: number;
}
