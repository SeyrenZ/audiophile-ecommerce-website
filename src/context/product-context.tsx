"use client";
import React, { createContext, useState, useContext } from "react";
import { ProductDescription } from "@app/lib/product-utils";

interface CartContextProps {
  cart: ProductDescription[];
  addToCart: (product: ProductDescription) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductDescription[]>([]);

  const addToCart = (product: ProductDescription) => {
    setCart((prevCart: ProductDescription[]) => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart: ProductDescription[]) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
