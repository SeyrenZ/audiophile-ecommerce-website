"use client";
import { useParams } from "next/navigation";

export type ProductDescription = {
  id: string;
  category: string;
  name: string;
  desc: string;
  image: string;
  subImage1: string;
  subImage2: string;
  subImage3: string;
  features: string;
  newProduct: boolean;
  alt: string;
  price: string;
  itemsInBox: { quantity: number; unit: string }[];
};

const ShuffleProduct = (array: ProductDescription[]): ProductDescription[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const GetRandomizedProducts = (
  productData: ProductDescription[]
): ProductDescription[] => {
  const params = useParams();
  const filteredProducts = productData.filter(
    (product) => product.id !== params.productId
  );
  const shuffledProducts = ShuffleProduct(filteredProducts);
  return shuffledProducts.slice(0, 3).map((product) => ({
    ...product,
    name: product.name.replace(/HEADPHONES|EARPHONES/g, ""),
  }));
};
