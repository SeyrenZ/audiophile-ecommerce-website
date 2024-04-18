import React from "react";
import {
  ArrowRight,
  ProductShadow,
  XX99HeadphonesMarkI,
  YX1Earphones,
  ZX9Speaker,
} from "../svg";
import Link from "next/link";

interface ProductDetail {
  title: string;
  image: JSX.Element;
  href: string;
}

const ProductCard = ({ title, image, href }: ProductDetail) => {
  return (
    <Link
      href={href}
      className="w-[350px] h-[284px] hover:scale-110 flex items-center justify-center relative transition ease-in-out duration-500"
    >
      <div className="w-full h-full flex flex-col items-center gap-y-12 z-10">
        <div className="w-full h-[50%] flex items-center justify-center relative">
          {image}
          <ProductShadow className="absolute bottom-[-50px] right-0 left-0 mx-auto" />
        </div>
        <div className="flex flex-col items-center gap-y-4 relative z-0">
          <div className="text-lg font-bold text-black tracking-widest">
            {title}
          </div>
          <div className="text-zinc-600 font-bold text-[13px] tracking-[1px] flex items-center gap-x-3">
            SHOP
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[204px] bg-primary-lightGray z-0" />
    </Link>
  );
};

const HomeProduct = () => {
  return (
    <div className="w-full h-auto py-[120px]">
      <div className="w-full max-w-[1110px] mx-auto flex justify-between">
        <ProductCard
          title="HEADPHONES"
          href="#"
          image={<XX99HeadphonesMarkI />}
        />
        <ProductCard title="SPEAKER" href="#" image={<ZX9Speaker />} />
        <ProductCard title="HEADPHONES" href="#" image={<YX1Earphones />} />
      </div>
    </div>
  );
};

export default HomeProduct;
