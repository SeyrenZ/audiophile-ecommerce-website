"use client";
import AboutUs from "@app/components/about-us";
import HomeHeader from "@app/components/home/home-header";
import HomeProduct from "@app/components/home/home-product";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductLink from "@app/components/product-link";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="overflow-hidden">
      <HomeHeader />
      <div className="pt-[120px] lg:space-y-[200px] sm:space-y-[96px] space-y-[120px]">
        <ProductLink />
        <HomeProduct />
        <AboutUs />
      </div>
    </main>
  );
}
