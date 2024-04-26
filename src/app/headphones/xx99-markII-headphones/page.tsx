import AboutUs from "@app/components/layout/about-us";
import ProductDetail from "@app/components/layout/product-detail";
import ProductLink from "@app/components/layout/product-link";
import React from "react";
import { ProductDescription } from "@app/components/layout/product-detail";

const Home = () => {
  const productData: ProductDescription = {
    name: "XX99 MARK II HEADPHONES",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: "/xx99-markII-product-photo.svg",
    subImage1: "/xx99-markII-product-detail-image1.svg",
    subImage2: "/xx99-markII-product-detail-image2.svg",
    subImage3: "/xx99-markII-product-detail-image3.svg",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat  The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    newProduct: "visible",
    alt: "XX99-MARKII-HEADPHONES",
    price: 2.999,
    itemsInBox: [
      { quantity: 1, unit: "Headphone Unit" },
      { quantity: 2, unit: "Replacement" },
      { quantity: 1, unit: "Earcups" },
      { quantity: 1, unit: "User Manual" },
      { quantity: 1, unit: "3.5mm 5m Audio Cable" },
      { quantity: 1, unit: "Travel Bag" },
    ],
  };
  return (
    <div className="">
      <div className="w-full lg:h-[90px] sm:h-[113px] h-[97px] bg-black" />
      <div className="lg:py-[160px] py-[65px] space-y-[160px]">
        <ProductDetail {...productData} />
        <ProductLink />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
