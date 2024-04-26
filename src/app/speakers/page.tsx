"use client";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SpeakersProduct from "@app/components/categories/speakers/speakers-product";
import ProductLink from "@app/components/layout/product-link";
import AboutUs from "@app/components/layout/about-us";
import CategroryHeader from "@app/components/layout/category-header";

const SpeakersCategory = () => {
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

export default SpeakersCategory;
