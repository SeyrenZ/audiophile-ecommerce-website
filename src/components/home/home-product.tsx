import React from "react";
import ZX9SpeakerCard from "./zx9-speaker-card";
import ZX7SpeakerCard from "./zx7-speaker-card";
import YX1EarphonesCard from "./yx1-earphones";
import ProductLink from "../product-link";

const HomeProduct = () => {
  return (
    <div className="w-full h-auto lg:px-0 sm:px-10 px-6 pt-[120px]">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[168px] sm:gap-y-[96px] gap-y-[120px]">
        <ProductLink />
        <div className="flex flex-col lg:gap-y-12 sm:gap-y-[32px] gap-y-6">
          <ZX9SpeakerCard />
          <ZX7SpeakerCard />
          <YX1EarphonesCard />
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
