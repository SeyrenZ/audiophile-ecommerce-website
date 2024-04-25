import React from "react";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export interface ProductDescription {
  name: string;
  desc: string;
  image: string;
  features: string;
  newProduct: string;
  alt: string;
  price: number;
  itemsInBox: { quantity: number; unit: string }[];
}

const ProductDetail: React.FC<ProductDescription> = ({
  name,
  desc,
  image,
  features,
  newProduct,
  alt,
  price,
  itemsInBox,
}) => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col items-start lg:gap-y-[160px] gap-y-[88px]">
        <div className="w-full h-auto flex sm:flex-row flex-col items-center lg:justify-between gap-x-[69px] gap-y-8">
          <div className="w-full max-w-[540px] lg:h-[560px] sm:h-[480px] h-[327px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center group">
            <Image
              src={image}
              width={349}
              height={348}
              alt={alt}
              className="mt-8 lg:group-hover:scale-110 lg:scale-100 group-hover:scale-[.65] scale-[.55] transition ease-in-out duration-700 static z-10"
            />
          </div>
          <div className="lg:w-[445px] sm:w-[572px] w-full h-auto flex flex-col items-start sm:gap-y-4 gap-y-6">
            <div
              className={`text-sm font-medium text-primary-copper tracking-[10px] ${newProduct}`}
            >
              NEW PRODUCT
            </div>

            <div className="w-[296px] text-black font-bold lg:text-[40px] text-[28px] lg:leading-[44px] leading-[32px] tracking-[1.43px] text-left">
              {name}
            </div>
            <div className="sm:mt-4 text-[15px] leading-[25px] text-zinc-500 font-medium text-left">
              {desc}
            </div>
            <div className="sm:mt-3 text-lg text-black font-bold tracking-[1.29px]">
              ${price}
            </div>
            <div className="lg:mt-8 sm:mt-4 mt-2 w-full h-[48px] flex items-center gap-x-5">
              <div className="w-[120px] h-full bg-primary-whiteSmoke flex items-center justify-between">
                <button className="text-[5px] p-[19px] font-bold text-black ">
                  <AiOutlineMinus />
                </button>
                <div className="text-xs font-bold text-[#1d2025]">1</div>
                <button className="text-[10px] p-[19px] font-extrabold text-primary-copper">
                  <AiOutlinePlus />
                </button>
              </div>
              <button className="w-[160px] h-full bg-primary-copper hover:bg-primary-apricot text-xs font-bold tracking-[1px] text-white">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex lg:flex-row flex-col items-start justify-between lg:gap-y-[120px] gap-y-[88px]">
          <div className="w-full max-w-[635px] h-auto flex flex-col gap-y-8">
            <div className="text-[32px] font-bold text-black tracking-[1.14px]">
              FEATURES
            </div>
            <div className="text-[15px] leading-[25px] text-zinc-500 font-medium">
              {features}
            </div>
          </div>
          <div className="w-full lg:max-w-[350px] sm:max-w-[549px] flex lg:flex-col sm:flex-row flex-col lg:justify-normal justify-between gap-y-8">
            <div className="text-[32px] font-bold text-black tracking-[1.14px]">
              IN THE BOX
            </div>
            <div className="flex flex-col items-start gap-y-2">
              {itemsInBox.map(({ quantity, unit }, index) => (
                <div key={index} className="flex items-center gap-x-6">
                  <div className="w-[15px] text-[15px] leading-[25px] font-bold text-primary-copper">
                    {quantity}x
                  </div>
                  <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
