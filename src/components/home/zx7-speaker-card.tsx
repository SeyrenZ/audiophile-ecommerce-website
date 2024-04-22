import Link from "next/link";
import React from "react";

const ZX7SpeakerCard = () => {
  return (
    <div className="w-full h-auto container">
      <div
        className="w-full h-[320px] lg:px-24 sm:px-[67px] px-7 rounded-lg flex flex-col justify-center relative overflow-hidden group"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <div className="absolute z-0 w-full inset-0 lg:bg-ZX7SpeakerBgDesktop sm:bg-ZX7SpeakerBgTablet bg-ZX7SpeakerBgMobile bg-cover group-hover:scale-110 transition ease-in-out duration-700" />
        <div className="flex flex-col gap-y-[28px] static z-10">
          <div className="text-[28px] font-bold text-black tracking-[2px]">
            ZX7 Speaker
          </div>
          <Link
            href="#"
            className="w-fit px-8 py-[15px] bg-black bg-opacity-0 hover:bg-opacity-100 border-[1px] border-black  text-[13px] text-black hover:text-white font-bold tracking-[1px] transition ease-in-out duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZX7SpeakerCard;
