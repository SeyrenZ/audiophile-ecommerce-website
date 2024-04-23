import Product from "@app/components/layout/product";
import React from "react";

const SpeakersProduct = () => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[160px] gap-y-[120px]">
        <Product
          name="ZX9 SPEAKER"
          desc="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          image="/zx9-product-photo.svg"
          newProduct="visible"
          animation="fade-right"
          position="order-1"
          link="#"
        />
        <Product
          name="ZX7 SPEAKER"
          desc="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          image="/zx7-product-photo.svg"
          newProduct="hidden"
          animation="fade-left"
          position="lg:order-2"
          link="#"
        />
      </div>
    </div>
  );
};

export default SpeakersProduct;
