import AboutUs from "@app/components/layout/about-us";
import ProductDetail from "@app/components/layout/product-detail";
import ProductLink from "@app/components/layout/product-link";
import React from "react";
import { ProductDescription } from "@app/components/layout/product-detail";
import { SuggestionData } from "@app/components/layout/product-suggestion";
import ProductSuggestion from "@app/components/layout/product-suggestion";

const Home = () => {
  const productData: ProductDescription = {
    name: "ZX7 SPEAKER",
    desc: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: "/zx7-product-photo.svg",
    subImage1: "/zx7-sub-image-1.svg",
    subImage2: "/zx7-sub-image-2.svg",
    subImage3: "/zx7-sub-image-3.svg",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    newProduct: "invisible",
    alt: "ZX7-SPEAKER",
    price: "4,500", // put as string to avoid comma for now
    itemsInBox: [
      { quantity: 2, unit: "Speaker Unit" },
      { quantity: 2, unit: "Speaker Cloth Panel" },
      { quantity: 1, unit: "User Manual" },
      { quantity: 1, unit: "3.5mm 5m Audio Cable" },
      { quantity: 1, unit: "7.5m Optical Cable" },
    ],
  };

  const productSuggestionData: SuggestionData = {
    product: [
      {
        title: "ZX9 SPEAKER",
        link: "/speakers/zx9-speaker",
        image: "/zx9-product-photo-no-shadow.svg",
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
