import AboutUs from "@app/components/layout/about-us";
import ProductDetail from "@app/components/layout/product-detail";
import ProductLink from "@app/components/layout/product-link";
import React from "react";
import { ProductDescription } from "@app/components/layout/product-detail";
import { SuggestionData } from "@app/components/layout/product-suggestion";
import ProductSuggestion from "@app/components/layout/product-suggestion";

const Home = () => {
  const productData: ProductDescription = {
    name: "YX1 WIRELESS EARPHONES",
    desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image: "/yx1-product-photo.svg",
    subImage1: "/yx1-sub-image-1.svg",
    subImage2: "/yx1-sub-image-2.svg",
    subImage3: "/yx1-sub-image-3.svg",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    newProduct: "invisible",
    alt: "YX1-WIRELESS-EARPHONES",
    price: "599", // put as string to avoid comma for now
    itemsInBox: [
      { quantity: 1, unit: "Earphone Unit" },
      { quantity: 6, unit: "Multi-size Earplugs" },
      { quantity: 1, unit: "User Manual" },
      { quantity: 1, unit: "USB-C Charging Cable" },
      { quantity: 1, unit: "Travel Pouch" },
    ],
  };

  const productSuggestionData: SuggestionData = {
    product: [
      {
        title: "XX99 MARK I",
        link: "/headphones/xx99-markI-headphones",
        image: "/xx99-markI-product-photo-no-shadow.svg",
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
