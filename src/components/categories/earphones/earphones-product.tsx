import Product from "@app/components/layout/product";
import React, { useState, useEffect } from "react";

export interface ProductDescription {
  name: string;
  desc: string;
  image: string;
  newProduct: string;
  link: string;
  id: string;
}

const HeadphonesProduct = () => {
  const [productData, setProductData] = useState<ProductDescription[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/earphones-product-data.json");
        const data = await response.json();
        setProductData(data);
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
            name={product.name}
            desc={product.desc}
            image={product.image}
            newProduct={product.newProduct}
            animation={index % 2 === 0 ? "fade-right" : "fade-left"} // Example animation logic
            position={index % 2 === 0 ? "order-1" : "lg:order-2"} // Example position logic
            id={`earphones/${product.id.toString()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadphonesProduct;
