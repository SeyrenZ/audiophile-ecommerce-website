import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductDescription {
  name: string;
  desc: string;
  image: string;
  newProduct: string;
  animation: string;
  position: string;
  id: string;
}

const Product: React.FC<ProductDescription> = ({
  name,
  desc,
  image,
  newProduct,
  animation,
  position,
  id,
}) => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col lg:gap-y-[160px] gap-y-[120px]">
        <div
          className="w-full h-auto flex lg:flex-row flex-col items-center justify-between gap-x-10 lg:gap-y-0 sm:gap-y-[52px] gap-y-[32px] "
          data-aos={animation}
          data-aos-duration="500"
        >
          <div
            className={`lg:w-[540px] w-full lg:h-[560px] h-[352px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center group relative ${position} `}
          >
            <Image
              src={image}
              width={296}
              height={348}
              alt="XX99-MARKII-HEADPHONES"
              className="lg:w-fit w-[220px] mt-8 group-hover:scale-110  transition ease-in-out duration-700 static z-10"
            />
          </div>
          <div className="lg:w-[445px] sm:w-[572px] w-full h-auto flex flex-col lg:items-start items-center gap-y-4 order-1">
            <div
              className={`text-sm font-medium text-primary-copper tracking-[10px] ${newProduct}`}
            >
              NEW PRODUCT
            </div>

            <div className="w-[296px] sm:mt-0 mt-1.5 text-black font-bold sm:text-[40px] text-[28px] sm:leading-[44px] tracking-[1.43px] lg:text-left text-center">
              {name}
            </div>
            <div className="sm:mt-4 text-[15px] leading-[25px] text-zinc-500 font-medium lg:text-left text-center">
              {desc}
            </div>
            <Link
              href={id}
              className="w-fit lg:mt-6 mt-2 px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
