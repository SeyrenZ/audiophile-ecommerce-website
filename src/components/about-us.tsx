import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex xl:flex-row flex-col items-center justify-between gap-x-10 xl:gap-y-0 sm:gap-y-[63px] gap-y-10">
        <Image
          src="/about-us-hero-tablet.svg"
          width={689}
          height={300}
          alt=""
          className="w-full xl:hidden sm:block hidden"
        />
        <Image
          src="/about-us-hero-mobile.svg"
          width={327}
          height={300}
          alt=""
          className="w-full block xl:hidden sm:hidden"
        />
        <div className="w-full xl:max-w-[445px] max-w-[573px] h-auto flex flex-col xl:items-start items-center gap-y-[32px]">
          <div className="sm:text-[40px] text-[28px] leading-[38px] sm:leading-[44px] tracking-[1.43px] font-bold text-black xl:text-left text-center">
            BRINGING YOU THE
            <br />
            <span className="text-primary-copper">BEST</span> AUDIO GEAR
          </div>
          <div className="text-[15px] leading-[25px] text-black font-medium xl:text-left text-center">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </div>
        </div>
        <Image
          src="/about-us-hero-desktop.svg"
          width={540}
          height={588}
          alt=""
          className="xl:block hidden"
        />
      </div>
    </div>
  );
};

export default AboutUs;
