import React from "react";
import {
  ArrowRight,
  ProductShadow,
  XX99HeadphonesMarkI,
  YX1Earphones,
  ZX9Speaker,
} from "../svg";
import Link from "next/link";
import Image from "next/image";
import ZX9SpeakerCard from "./zx9-speaker-card";
import ZX7SpeakerCard from "./zx7-speaker-card";
import YX1EarphonesCard from "./yx1-earphones";

interface ProductDetail {
  title: string;
  image: JSX.Element;
  href: string;
}

const ProductCard = ({ title, image, href }: ProductDetail) => {
  return (
    <Link
      href={href}
      className="lg:w-[350px] sm:w-[223px] w-[350px] h-[284px] hover:scale-105 flex items-center justify-center relative transition ease-in-out duration-500 group"
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
          <div className="text-zinc-600 group-hover:text-primary-copper font-bold text-[13px] tracking-[1px] flex items-center gap-x-3 transition ease-in-out duration-300">
            SHOP
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[204px] rounded-lg bg-primary-whiteSmoke z-0" />
    </Link>
  );
};

const HomeProduct = () => {
  return (
    <div className="w-full h-auto lg:px-0 sm:px-10 px-6 pt-[120px]">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[168px] sm:gap-y-[96px] gap-y-[120px]">
        <div className="w-full flex sm:flex-row flex-col items-center sm:justify-between sm:gap-y-0 gap-y-4">
          <div data-aos="fade-up" data-aos-duration="900">
            <ProductCard
              title="HEADPHONES"
              href="#"
              image={<XX99HeadphonesMarkI />}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="700">
            <ProductCard title="SPEAKER" href="#" image={<ZX9Speaker />} />
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <ProductCard title="HEADPHONES" href="#" image={<YX1Earphones />} />
          </div>
        </div>
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
