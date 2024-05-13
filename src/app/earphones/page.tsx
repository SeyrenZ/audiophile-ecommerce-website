"use client";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CategroryHeader from "@app/components/layout/category-header";
import EarphonesProduct from "@app/components/categories/earphones/earphones-product";
import ProductLink from "@app/components/layout/product-link";
import AboutUs from "@app/components/layout/about-us";

const EarphonesCategory = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:space-y-[160px] space-y-16 overflow-hidden pb-[200px]">
      <CategroryHeader title="EARPHONES" />
      <EarphonesProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default EarphonesCategory;
