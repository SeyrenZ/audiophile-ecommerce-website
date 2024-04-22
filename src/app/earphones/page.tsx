"use client";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CategroryHeader from "@app/components/category-header";
import EarphonesProduct from "@app/components/product-detail/earphones/earphones-product";
import ProductLink from "@app/components/product-link";
import AboutUs from "@app/components/about-us";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:space-y-[160px] space-y-16 overflow-hidden">
      <CategroryHeader title="EARPHONES" />
      <EarphonesProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default Home;
