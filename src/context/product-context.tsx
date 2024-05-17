"use client";
import React, { createContext, useState, useContext } from "react";
import { ProductDescription } from "@app/lib/product-utils";

interface CartContextProps {
  cart: ProductDescription[];
  addToCart: (product: ProductDescription, quantity: number) => void;
  removeAllFromCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeAllFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
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

  const increaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 0) + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, product) => {
        if (product.id === productId) {
          if (product.quantity && product.quantity > 1) {
            acc.push({ ...product, quantity: product.quantity - 1 });
          }
        } else {
          acc.push(product);
        }
        return acc;
      }, [] as ProductDescription[])
    );
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeAllFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
