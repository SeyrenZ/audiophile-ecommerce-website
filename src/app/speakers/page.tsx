"use client";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SpeakersProduct from "@app/components/product-detail/speakers/speakers-product";
import ProductLink from "@app/components/product-link";
import AboutUs from "@app/components/about-us";
import CategroryHeader from "@app/components/category-header";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:space-y-[160px] space-y-16 overflow-hidden">
      <CategroryHeader title="SPEAKERS" />
      <SpeakersProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default Home;
