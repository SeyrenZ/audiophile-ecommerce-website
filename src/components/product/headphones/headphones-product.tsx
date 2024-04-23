import Product from "@app/components/layout/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeadphonesProduct = () => {
  type Product = {
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const products: Product[] = [
    {
      title: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/xx99-markII-product-photo.svg",
      link: "#",
    },
    {
      title: "XX99 MARK I HEADPHONES",
      description:
        "The new XX99 Mark I headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/xx99-markI-product-photo.svg",
      link: "#",
    },
    {
      title: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "/xx59-product-photo.svg",
      link: "#",
    },
  ];

  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[160px] gap-y-[120px]">
        <Product
          name="XX99 MARK II HEADPHONES"
          desc="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          image="/xx99-markII-product-photo.svg"
          animation="fade-right"
          position="order-1"
          link="#"
        />
        <Product
          name="XX99 MARK I HEADPHONES"
          desc="The new XX99 Mark I headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          image="/xx99-markI-product-photo.svg"
          animation="fade-left"
          position="lg:order-2"
          link="#"
        />
        <Product
          name="XX59 HEADPHONES"
          desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          image="/xx59-product-photo.svg"
          animation="fade-right"
          link="#"
          position="order-1"
        />
      </div>
    </div>
  );
};

export default HeadphonesProduct;
