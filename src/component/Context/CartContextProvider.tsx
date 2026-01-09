import React, { createContext, useContext, useState } from "react";
import { CartItemToAdd } from "../../interfaces/ClientInterface/ICart";

interface CartContextType {
  cart: CartItemToAdd[];
  addToCart: (item: Omit<CartItemToAdd, "qty">) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItemToAdd[]>([]);

  const addToCart = (product: Omit<CartItemToAdd, "qty">) => {
    console.log("Adding to cart:", product);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
console.log("Existing to cart:", existing);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
