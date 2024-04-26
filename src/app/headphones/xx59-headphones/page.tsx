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
    image: "/xx59-product-photo.svg",
    subImage1: "/xx59-sub-image-1.svg",
    subImage2: "/xx59-sub-image-2.svg",
    subImage3: "/xx59-sub-image-3.svg",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    newProduct: "invisible",
    alt: "XX59-HEADPHONES",
    price: "899", // put as string to avoid comma for now
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
        title: "XX99 MARK I",
        link: "/headphones/xx99-markI-headphones",
        image: "/xx99-markI-product-photo-no-shadow.svg",
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
