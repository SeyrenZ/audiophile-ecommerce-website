import HeadphonesHeader from "@app/components/product-detail/headphones/headphones-header";
import HeadphonesProduct from "@app/components/product-detail/headphones/headphones-product";
import React from "react";

const Home = () => {
  return (
    <div className="sm:space-y-[160px] space-y-16">
      <HeadphonesHeader />
      <HeadphonesProduct />
    </div>
  );
};

export default Home;
