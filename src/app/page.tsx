"use client";
import AboutUs from "@app/components/home/about-us";
import HomeHeader from "@app/components/home/home-header";
import HomeProduct from "@app/components/home/home-product";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main>
      <HomeHeader />
      <div className="lg:space-y-[200px] sm:space-y-[96px] space-y-[120px]">
        <HomeProduct />
        <AboutUs />
      </div>
    </main>
  );
}
