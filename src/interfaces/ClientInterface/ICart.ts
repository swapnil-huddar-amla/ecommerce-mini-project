export interface CartItemToAdd {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  title: string;
  description: string;
  qty: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}
