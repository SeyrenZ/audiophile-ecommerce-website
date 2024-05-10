"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ProductDetail from "@app/components/layout/product-detail";
import AboutUs from "@app/components/layout/about-us";
import ProductLink from "@app/components/layout/product-link";
import GoBackLink from "@app/components/layout/back-link";

type ProductDescription = {
  id: string;
  name: string;
  desc: string;
  image: string;
  subImage1: string;
  subImage2: string;
  subImage3: string;
  features: string;
  newProduct: string;
  alt: string;
  price: string;
  itemsInBox: { quantity: number; unit: string }[];
};

const Page = () => {
  const [productData, setProductData] = useState<ProductDescription[]>([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/speakers-product-data.json");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="w-full lg:h-[90px] sm:h-[113px] h-[97px] bg-black" />
      <div className="lg:py-20 sm:py-8 py-4 space-y-[160px]">
        <div className="lg:space-y-14 space-y-6">
          <GoBackLink link="/speakers" />
          {productData
            .filter((product) => product.id === String(params.productId))
            .map((product, index) => (
              <ProductDetail key={index} {...product} />
            ))}
        </div>
        <ProductLink />
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
