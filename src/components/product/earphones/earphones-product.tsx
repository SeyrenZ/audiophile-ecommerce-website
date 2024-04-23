import Product from "@app/components/layout/product";
import React from "react";

const EarphonesProduct = () => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[160px] gap-y-[120px]">
        <Product
          name="YX1 WIRELESS EARPHONES"
          desc="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          image="/yx1-product-photo.svg"
          newProduct="visible"
          animation="fade-right"
          position="order-1"
          link="#"
        />
      </div>
    </div>
  );
};

export default EarphonesProduct;
