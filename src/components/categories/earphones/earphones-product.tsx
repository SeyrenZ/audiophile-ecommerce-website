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
  const [productData, setProductData] = useState<ProductDescription | null>(
    null
  );

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
        {productData && (
          <Product
            name={productData.name}
            desc={productData.desc}
            image={productData.image}
            newProduct={productData.newProduct}
            animation="fade-right" // Example animation logic
            position="order-1" // Example position logic
            id={`headphones/${productData.id.toString()}`} // Fixed the variable name from 'product' to 'productData'
          />
        )}
      </div>
    </div>
  );
};

export default HeadphonesProduct;
