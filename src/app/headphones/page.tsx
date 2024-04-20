import AboutUs from "@app/components/about-us";
import HeadphonesHeader from "@app/components/product-detail/headphones/headphones-header";
import HeadphonesProduct from "@app/components/product-detail/headphones/headphones-product";
import ProductLink from "@app/components/product-link";
import React from "react";

const Home = () => {
  return (
    <div className="sm:space-y-[160px] space-y-16">
      <HeadphonesHeader />
      <HeadphonesProduct />
      <ProductLink />
      <AboutUs />
    </div>
  );
};

export default Home;
