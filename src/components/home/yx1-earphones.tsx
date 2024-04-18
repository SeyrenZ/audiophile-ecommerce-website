import Image from "next/image";
import Link from "next/link";
import React from "react";

const YX1EarphonesCard = () => {
  return (
    <div className="w-full h-auto flex sm:flex-row flex-col items-center lg:gap-x-[30px] gap-x-[10px] sm:gap-y-0 gap-y-6 group">
      <div className="w-full max-w-[540px] sm:h-[320px] h-[200px] rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 w-full lg:bg-YX1EarphonesHero sm:bg-YX1EarphonesHeroTablet bg-YX1EarphonesHero bg-cover group-hover:scale-110 transition ease-in-out duration-700" />
      </div>
      <div className="w-full max-w-[540px] sm:h-[320px] h-[200px] rounded-lg flex items-center justify-center bg-primary-whiteSmoke">
        <div className="flex flex-col items-start gap-y-8">
          <div className="text-[28px] font-bold tracking-[2px]">
            YX1 EARPHONES
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

export default YX1EarphonesCard;
