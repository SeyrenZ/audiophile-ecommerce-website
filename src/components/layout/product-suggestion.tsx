import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductDescription } from "@app/lib/product-utils";

export interface SuggestionData {
  product: ProductDescription[];
}

const ProductSuggestion: React.FC<SuggestionData> = ({ product }) => {
  return (
    <div className="w-full h-auto container">
      <div className="w-full max-w-[1110px] mx-auto flex flex-col items-center gap-y-[56px]">
        <div className="text-[32px] leading-[36px] tracking-[1.14px] font-bold text-black">
          YOU MAY ALSO LIKE
        </div>
        <div className="w-full flex sm:flex-row flex-col items-center lg:gap-x-[30px] gap-x-[10px] gap-y-16">
          {product.map((product, index) => (
            <div
              key={index}
              className="w-full h-auto flex flex-col items-center justify-center gap-y-9 group"
            >
              <div className="w-full max-w-[350px] sm:h-[318px] h-[120px] bg-primary-whiteSmoke rounded-lg flex items-center justify-center">
                <Image
                  src={product.image}
                  width={150}
                  height={200}
                  alt=""
                  className="sm:scale-100 sm:group-hover:scale-110 scale-50 transition ease-in-out duration-500"
                />
              </div>
              <div className="text-[24px] font-bold text-black tracking-[1.71px]">
                {product.name}
              </div>
              <Link
                href={"/" + product.category + "/" + product.id}
                className="w-fit px-8 py-[15px] bg-primary-copper hover:bg-primary-apricot text-[13px] text-white font-bold tracking-[1px] transition ease-in-out duration-300"
              >
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSuggestion;
