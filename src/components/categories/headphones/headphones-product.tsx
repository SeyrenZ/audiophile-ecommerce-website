import Product from "@app/components/layout/product";
import React, { useState, useEffect } from "react";
import { ProductDescription } from "@app/lib/product-utils";

const HeadphonesProduct = () => {
  const [productData, setProductData] = useState<ProductDescription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/product-data.json");
        const data = await response.json();
        const headphones = data.filter(
          (product: ProductDescription) => product.category === "headphones"
        );
        setProductData(headphones);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[160px] gap-y-[120px]">
        {productData.map((product, index) => (
          <Product
            key={index}
            {...product}
            animation={index % 2 === 0 ? "fade-right" : "fade-left"} // Example animation logic
            position={index % 2 === 0 ? "order-1" : "lg:order-2"} // Example position logic
            id={`headphones/${product.id.toString()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadphonesProduct;
