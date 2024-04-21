import Link from "next/link";
import {
  ArrowRight,
  ProductShadow,
  XX99HeadphonesMarkI,
  YX1Earphones,
  ZX9Speaker,
} from "./svg";

// interface ProductDetail {
//   title: string;
//   image: JSX.Element;
//   href: string;
// }

// const ProductCard = ({ title, image, href }: ProductDetail) => {
//   return (
//     <Link
//       href={href}
//       className="w-full max-w-[350px] h-[284px] hover:scale-105 bg-primary-whiteSmoke flex items-center justify-center relative transition ease-in-out duration-500 group"
//     >
//       <div className="w-full h-full flex flex-col items-center gap-y-12 z-10">
//         <div className="w-full h-[50%] flex items-center justify-center relative">
//           {image}
//           <ProductShadow className="absolute bottom-[-50px] right-0 left-0 mx-auto" />
//         </div>
//         <div className="flex flex-col items-center gap-y-4 relative z-0">
//           <div className="text-lg font-bold text-black tracking-widest">
//             {title}
//           </div>
//           <div className="text-zinc-600 group-hover:text-primary-copper font-bold text-[13px] tracking-[1px] flex items-center gap-x-3 transition ease-in-out duration-300">
//             SHOP
//             <ArrowRight />
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

const ProductLink = () => {
  return (
    <div
      className="w-full max-w-[1110px] mx-auto
     flex sm:flex-row flex-col items-center lg:gap-x-[30px] gap-x-[10px] sm:gap-y-0 gap-y-4 "
    >
      <Link
        href="/headphones"
        className="w-full max-w-[350px] h-[284px]  flex items-center justify-center relative group "
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <div className="w-full h-full flex flex-col items-center gap-y-12 z-10">
          <div className="w-full h-[50%] flex items-center justify-center relative group-hover:scale-110 transition ease-in-out duration-500 ">
            <XX99HeadphonesMarkI />
            <ProductShadow className="absolute bottom-[-50px] right-0 left-0 mx-auto" />
          </div>
          <div className="flex flex-col items-center gap-y-4 relative z-0">
            <div className="text-lg font-bold text-black tracking-widest">
              HEADPHONES
            </div>
            <div className="text-zinc-600 group-hover:text-primary-copper font-bold text-[13px] tracking-[1px] flex items-center gap-x-3 transition ease-in-out duration-300">
              SHOP
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-0 w-full lg:h-[204px] h-[165px] rounded-lg bg-primary-whiteSmoke"></div>
      </Link>
      <Link
        href="#"
        className="w-full max-w-[350px] h-[284px] flex items-center justify-center relative group"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div className="w-full h-full flex flex-col items-center gap-y-12 z-10">
          <div className="w-full h-[50%] flex items-center justify-center relative group-hover:scale-110 transition ease-in-out duration-500 group">
            <ZX9Speaker />
            <ProductShadow className="absolute bottom-[-50px] right-0 left-0 mx-auto" />
          </div>
          <div className="flex flex-col items-center gap-y-4 relative z-0">
            <div className="text-lg font-bold text-black tracking-widest">
              SPEAKER
            </div>
            <div className="text-zinc-600 group-hover:text-primary-copper font-bold text-[13px] tracking-[1px] flex items-center gap-x-3 transition ease-in-out duration-300">
              SHOP
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-0 w-full lg:h-[204px] h-[165px] rounded-lg bg-primary-whiteSmoke"></div>
      </Link>
      <Link
        href="#"
        className="w-full max-w-[350px] h-[284px] flex items-center justify-center relative group"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="w-full h-full flex flex-col items-center gap-y-12 z-10">
          <div className="w-full h-[50%] flex items-center justify-center relative group-hover:scale-110 transition ease-in-out duration-500 group">
            <YX1Earphones />
            <ProductShadow className="absolute bottom-[-50px] right-0 left-0 mx-auto" />
          </div>
          <div className="flex flex-col items-center gap-y-4 relative z-0">
            <div className="text-lg font-bold text-black tracking-widest">
              EARPHONES
            </div>
            <div className="text-zinc-600 group-hover:text-primary-copper font-bold text-[13px] tracking-[1px] flex items-center gap-x-3 transition ease-in-out duration-300">
              SHOP
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-0 w-full lg:h-[204px] h-[165px] rounded-lg bg-primary-whiteSmoke"></div>
      </Link>
    </div>
  );
};

export default ProductLink;
