import AboutUs from "@app/components/layout/about-us";
import ProductDetail from "@app/components/layout/product-detail";
import ProductLink from "@app/components/layout/product-link";
import React from "react";
import { ProductDescription } from "@app/components/layout/product-detail";
import { SuggestionData } from "@app/components/layout/product-suggestion";
import ProductSuggestion from "@app/components/layout/product-suggestion";

const Home = () => {
  const productData: ProductDescription = {
    name: "XX99 MARK I HEADPHONES",
    desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ",
    image: "/xx99-markI-product-photo.svg",
    subImage1: "/xx99-markI-sub-image-1.svg",
    subImage2: "/xx99-markI-sub-image-2.svg",
    subImage3: "/xx99-markI-sub-image-3.svg",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    newProduct: "invisible",
    alt: "XX99-MARKI-HEADPHONES",
    price: "1,750", // put as string to avoid comma for now
    itemsInBox: [
      { quantity: 1, unit: "Headphone Unit" },
      { quantity: 2, unit: "Replacement" },
      { quantity: 1, unit: "User Manual" },
      { quantity: 1, unit: "3.5mm 5m Audio Cable" },
    ],
  };

  const productSuggestionData: SuggestionData = {
    product: [
      {
        title: "XX99 MARK II",
        link: "/headphones/xx99-markII-headphones",
        image: "/xx99-markII-product-photo-no-shadow.svg",
      },
      {
        title: "XX59",
        link: "/",
        image: "/xx59-product-photo-no-shadow.svg",
      },
      {
        title: "ZX9 SPEAKER",
        link: "/",
        image: "/zx9-product-photo-no-shadow.svg",
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
