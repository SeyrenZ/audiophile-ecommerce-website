import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <div className="w-full h-auto bg-[#141414]">
      <div className="w-full max-w-[1110px] mx-auto sm:px-10 sm:h-[729px] h-[600px] lg:bg-HomeHeaderBg sm:bg-HomeHeaderBgTablet bg-HomeHeaderBgMobile bg-cover bg-center bg-no-repeat flex items-center lg:justify-start justify-center relative">
        <div className="mt-16 flex flex-col lg:items-start items-center gap-y-7">
          <div className="text-sm font-medium text-zinc-700 tracking-[10px]">
            NEW PRODUCT
          </div>
          <div className="text-white font-bold sm:text-[56px] text-[36px] sm:leading-[58px] leading-[40px] tracking-[2px] lg:text-left text-center">
            XX99 MARK II
            <br />
            HEADPHONES
          </div>
          <div className="text-[15px] leading-[25px] text-zinc-400 font-medium lg:text-left text-center">
            Experience natural, lifelike audio and
            <br className="block sm:hidden" /> exceptional
            <br className="sm:block hidden" /> build quality made for the
            <br className="block sm:hidden" />
            passionate music <br className="sm:block hidden" />
            enthusiast.
          </div>
          <Link
            href="#"
            className="w-fit mt-5 px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
