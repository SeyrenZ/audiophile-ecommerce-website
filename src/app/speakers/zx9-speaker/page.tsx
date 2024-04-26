import AboutUs from "@app/components/layout/about-us";
import ProductDetail from "@app/components/layout/product-detail";
import ProductLink from "@app/components/layout/product-link";
import React from "react";
import { ProductDescription } from "@app/components/layout/product-detail";
import { SuggestionData } from "@app/components/layout/product-suggestion";
import ProductSuggestion from "@app/components/layout/product-suggestion";

const Home = () => {
  const productData: ProductDescription = {
    name: "ZX9 SPEAKER",
    desc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: "/zx9-product-photo.svg",
    subImage1: "/zx9-sub-image-1.svg",
    subImage2: "/zx9-sub-image-2.svg",
    subImage3: "/zx9-sub-image-3.svg",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    newProduct: "visible",
    alt: "ZX9-SPEAKER",
    price: "4,500", // put as string to avoid comma for now
    itemsInBox: [
      { quantity: 2, unit: "Speaker Unit" },
      { quantity: 2, unit: "Speaker Cloth Panel" },
      { quantity: 1, unit: "User Manual" },
      { quantity: 1, unit: "3.5mm 5m Audio Cable" },
      { quantity: 1, unit: "10m Optical Cable" },
    ],
  };

  const productSuggestionData: SuggestionData = {
    product: [
      {
        title: "ZX7 SPEAKER",
        link: "/speakers/zx7-speaker",
        image: "/zx7-product-photo-no-shadow.svg",
      },
      {
        title: "XX99 MARK I",
        link: "/headphones/xx99-markI-headphones",
        image: "/xx99-markI-product-photo-no-shadow.svg",
      },
      {
        title: "XX59 HEADPHONES",
        link: "/headphones/xx59-headphones",
        image: "/xx59-product-photo-no-shadow.svg",
      },
    ],
  };
  return (
    <div className="">
      <div className="w-full lg:h-[90px] sm:h-[113px] h-[97px] bg-black" />
      <div className="lg:py-[160px] py-[65px] space-y-[160px]">
        <ProductDetail {...productData} />
        <ProductSuggestion {...productSuggestionData} />
        <ProductLink />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
