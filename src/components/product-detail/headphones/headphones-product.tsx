import { ProductShadow2 } from "@app/components/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeadphonesProduct = () => {
  type Product = {
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const products: Product[] = [
    {
      title: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/xx99-markII-product-photo.svg",
      link: "#",
    },
    {
      title: "XX99 MARK I HEADPHONES",
      description:
        "The new XX99 Mark I headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image: "/xx99-markI-product-photo.svg",
      link: "#",
    },
    {
      title: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image: "/xx59-product-photo.svg",
      link: "#",
    },
  ];

  return (
    <div className="w-full h-auto sm:px-10 px-6">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-y-[160px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-auto flex lg:flex-row flex-col items-center justify-between lg:gap-y-0 sm:gap-y-[52px] gap-y-[32px] "
          >
            <div
              className={`lg:w-[540px] w-full lg:h-[560px] h-[352px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center group relative ${
                index === 1 ? "lg:order-2" : "order-1"
              }`}
            >
              <Image
                src={product.image}
                width={351}
                height={413}
                alt="XX99-MARKII-HEADPHONES"
                className="lg:w-auto w-[220px] mt-8 group-hover:scale-110  transition ease-in-out duration-700 static z-10"
              />
            </div>
            <div className="lg:w-[445px] sm:w-[572px] w-full h-auto flex flex-col lg:items-start items-center gap-y-4 order-1">
              {index === 0 && (
                <div className="text-sm font-medium text-primary-copper tracking-[10px]">
                  NEW PRODUCT
                </div>
              )}
              <div className="w-[296px] sm:mt-0 mt-1.5 text-black font-bold sm:text-[40px] text-[28px] sm:leading-[44px] tracking-[1.43px] lg:text-left text-center">
                {product.title}
              </div>
              <div className="sm:mt-4 text-[15px] leading-[25px] text-zinc-500 font-medium lg:text-left text-center">
                {product.description}
              </div>
              <Link
                href={product.link}
                className="w-fit lg:mt-6 mt-2 px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesProduct;
