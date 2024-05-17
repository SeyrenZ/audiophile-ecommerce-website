"use client";
import React, { createContext, useState, useContext } from "react";
import { ProductDescription } from "@app/lib/product-utils";

interface CartContextProps {
  cart: ProductDescription[];
  addToCart: (product: ProductDescription, quantity: number) => void;
  removeAllFromCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeAllFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductDescription[]>([]);

  const addToCart = (product: ProductDescription, quantity: number) => {
    setCart((prevCart: ProductDescription[]) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // The product is already in the cart, increase its quantity
        const newCart = [...prevCart];
        const existingProduct = newCart[existingProductIndex];

        if (existingProduct) {
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity! + quantity,
          };
          newCart[existingProductIndex] = updatedProduct;
        }

        return newCart;
      } else {
        // The product is not in the cart, add it to the cart
        return [...prevCart, { ...product, quantity }];
      }
    });
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
