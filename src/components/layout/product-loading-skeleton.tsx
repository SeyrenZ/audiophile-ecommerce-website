import React from "react";

const ProductLoadingSkeleton = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full lg:h-[90px] sm:h-[113px] h-[97px] bg-black" />
      <div className="w-full container max-w-[1110px] mx-auto lg:py-20 sm:py-8 py-4 flex flex-col items-start lg:gap-y-[160px] gap-y-[88px]">
        <div className="w-full h-auto flex sm:flex-row flex-col items-center lg:justify-between gap-x-[69px] gap-y-8">
          <div className="w-full max-w-[540px] lg:h-[560px] sm:h-[480px] h-[327px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center group"></div>
          <div className="lg:w-[445px] sm:w-[572px] w-full h-auto flex flex-col items-start sm:gap-y-4 gap-y-6">
            <div className="w-full h-[19px] bg-primary-whiteSmoke rounded-lg" />
            <div className="w-full h-[88px] bg-primary-whiteSmoke rounded-lg" />
            <div className="w-full h-[100px] bg-primary-whiteSmoke rounded-lg" />
            <div className="w-[73px] h-[25px] bg-primary-whiteSmoke rounded-lg" />
            <div className="lg:mt-8 sm:mt-4 mt-2 w-full h-[48px] flex items-center gap-x-5">
              <div className="w-[120px] h-full p-19px rounded-lg bg-primary-whiteSmoke" />
              <div className="w-[160px] h-full rounded-lg bg-primary-whiteSmoke" />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex lg:flex-row flex-col items-start justify-between lg:gap-y-[120px] gap-y-[88px]">
          <div className="w-full max-w-[635px] h-auto flex flex-col gap-y-8">
            <div className="w-full max-w-[445px] h-9 rounded-lg bg-primary-whiteSmoke" />
            <div className="w-full h-[250px] rounded-lg bg-primary-whiteSmoke" />
          </div>
          <div className="w-full lg:max-w-[350px] sm:max-w-[549px] flex lg:flex-col sm:flex-row flex-col lg:justify-normal justify-between gap-y-8 gap-x-5">
            <div className="w-full max-w-[335px] h-9 rounded-lg bg-primary-whiteSmoke" />
            <div className="w-full h-[250px] rounded-lg bg-primary-whiteSmoke" />
          </div>
        </div>
        <div className="w-full lg:h-[529px] sm:h-[368px] h-[756px] flex sm:flex-row flex-col sm:gap-8 gap-5">
          <div className="w-full lg:max-w-[445px] sm:max-w-[277px] h-full flex flex-col sm:gap-y-8 gap-5">
            <div className="w-full rounded-lg h-full bg-primary-whiteSmoke " />
            <div className="w-full rounded-lg h-full  bg-primary-whiteSmoke  " />
          </div>
          <div className="w-full rounded-lg h-full  bg-primary-whiteSmoke  " />
        </div>
      </div>
    </div>
  );
};

export default ProductLoadingSkeleton;
