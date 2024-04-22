"use client";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SpeakersHeader from "@app/components/product-detail/speakers/speakers-header";
import SpeakersProduct from "@app/components/product-detail/speakers/speakers-product";
import ProductLink from "@app/components/product-link";
import AboutUs from "@app/components/about-us";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:space-y-[160px] space-y-16 overflow-hidden">
      <SpeakersHeader />
      <SpeakersProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default Home;
