"use client";
import AboutUs from "@app/components/about-us";
import HeadphonesHeader from "@app/components/product-detail/headphones/headphones-header";
import HeadphonesProduct from "@app/components/product-detail/headphones/headphones-product";
import ProductLink from "@app/components/product-link";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="sm:space-y-[160px] space-y-16 overflow-hidden">
      <HeadphonesHeader />
      <HeadphonesProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default Home;
