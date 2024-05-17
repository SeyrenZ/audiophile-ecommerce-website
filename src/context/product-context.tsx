"use client";
import React, { createContext, useState, useContext } from "react";
import { ProductDescription } from "@app/lib/product-utils";

interface CartContextProps {
  cart: ProductDescription[];
  addToCart: (product: ProductDescription) => void;
  removeAllFromCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeAllFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductDescription[]>([]);

  const addToCart = (product: ProductDescription) => {
    setCart((prevCart: ProductDescription[]) => [...prevCart, product]);
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
