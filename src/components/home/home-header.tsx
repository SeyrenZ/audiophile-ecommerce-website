import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="w-full h-auto bg-[#141414]">
      <div className="w-full max-w-[1110px] mx-auto container sm:h-[729px] h-[600px]  flex items-center lg:justify-start justify-center relative">
        <div
          className="w-full h-full absolute inset-0 lg:bg-HomeHeaderBg sm:bg-HomeHeaderBgTablet bg-HomeHeaderBgMobile bg-cover bg-center bg-no-repeat"
          data-aos="fade-out"
          data-aos-duration="2000"
        ></div>
        <div className="mt-16 flex flex-col lg:items-start items-center gap-y-7">
          <div
            className="text-sm font-medium text-zinc-700 tracking-[10px]"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            NEW PRODUCT
          </div>
          <div
            className="text-white font-bold sm:text-[56px] text-[36px] sm:leading-[58px] leading-[40px] tracking-[2px] lg:text-left text-center"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            XX99 MARK II
            <br />
            HEADPHONES
          </div>
          <div
            className="text-[15px] leading-[25px] text-zinc-400 font-medium lg:text-left text-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Experience natural, lifelike audio and
            <br className="block sm:hidden" /> exceptional
            <br className="sm:block hidden" /> build quality made for the
            <br className="block sm:hidden" />
            passionate music <br className="sm:block hidden" />
            enthusiast.
          </div>
          <Link
            href="/headphones/xx99-markII"
            className="w-fit mt-5 px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
            data-aos="fade-right"
            data-aos-duration="1100"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
