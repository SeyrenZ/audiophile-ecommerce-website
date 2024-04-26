import React from "react";
import Image from "next/image";
import Link from "next/link";

const ZX9SpeakerCard = () => {
  return (
    <div
      className="w-full h-auto container flex flex-col gap-y-12"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="relative w-full lg:h-[560px] sm:h-[720px] h-[600px] lg:pt-[98px] lg:pb-0 sm:pt-12 sm:pb-16 py-12 sm:px-32 px-5 bg-primary-copper rounded-lg flex lg:flex-row flex-col items-center justify-between overflow-hidden group">
        <div className="z-0 absolute w-full inset-0 lg:bg-HomeProductDesktopProps sm:bg-HomeProductTabletProps bg-HomeProductMobileProps lg:bg-left bg-top bg-no-repeat group-hover:scale-105 transition ease-in-out duration-700 " />
        <Image
          src="/zx9-speaker-hero.svg"
          width={410}
          height={493}
          alt="ZX9-SPEAKER"
          className="static z-10 lg:w-auto sm:w-[197px] w-[172px] group-hover:scale-110 transition ease-in-out duration-700"
        />
        <div className="lg:pb-[85px] sm:pb-0 pb-3 flex flex-col lg:items-start items-center gap-y-5 relative z-10">
          <div className="sm:text-[56px] text-[36px] sm:leading-[58px] leading-[40px] tracking-[2px] font-bold text-white lg:text-left text-center">
            ZX9
            <br />
            SPEAKER
          </div>
          <div className="text-[15px] leading-[25px] text-white lg:text-left text-center">
            Upgrade to premium speakers that are
            <br className="sm:block hidden" /> phenomenally built to deliver
            truly remarkable
            <br className="sm:block hidden" /> sound.
          </div>
          <Link
            href="/speakers/zx9-speaker"
            className="w-fit sm:mt-5 mt-2 px-8 py-[15px] bg-black hover:bg-zinc-600 text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZX9SpeakerCard;
