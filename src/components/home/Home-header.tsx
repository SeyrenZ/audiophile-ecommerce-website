import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-auto bg-[#141414]">
      <div className="w-full max-w-[1110px] mx-auto h-[729px] bg-HeaderBg bg-cover bg-center flex items-center relative">
        <div className="mt-16 flex flex-col items-start gap-y-7">
          <div className="text-sm font-medium text-zinc-700 tracking-[10px]">
            NEW PRODUCT
          </div>
          <div className="text-white font-bold text-[56px] leading-[58px] tracking-[2px]">
            XX99 MARK II
            <br />
            HEADPHONES
          </div>
          <div className="text-[15px] leading-[25px] text-zinc-400 font-medium">
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music <br />
            enthusiast.
          </div>
          <Link
            href="#"
            className="w-fit mt-5 px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px]"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
