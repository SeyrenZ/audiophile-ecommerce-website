"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { GetRandomizedProducts } from "@app/lib/product-utils";
import ProductDetail from "@app/components/layout/product-detail";
import AboutUs from "@app/components/layout/about-us";
import ProductLink from "@app/components/layout/product-link";
import GoBackLink from "@app/components/layout/back-link";
import ProductLoadingSkeleton from "@app/components/layout/product-loading-skeleton";
import ProductSuggestion from "@app/components/layout/product-suggestion";

type ProductDescription = {
  id: string;
  category: string;
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
  const [headphonesData, setHeadphonesData] = useState<ProductDescription[]>(
    []
  );
  const randomizedProducts = GetRandomizedProducts(productData);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/product-data.json");
        const data = await response.json();
        setProductData(data);
        const headphones = data.filter(
          (product: ProductDescription) => product.category === "headphones"
        );
        setHeadphonesData(headphones);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (headphonesData.length === 0) return <ProductLoadingSkeleton />; // Wait for data to be fetched
  const product = headphonesData.find(
    (product) => product.id === String(params.productId)
  );
  if (!product) {
    notFound(); // Call notFound() if product is not found
  }

  return (
    <div>
      <div className="lg:py-20 sm:py-8 py-4 space-y-[160px]">
        <div className="lg:space-y-14 space-y-6">
          <GoBackLink link="/headphones" />
          {product && <ProductDetail key={product.id} {...product} />}
        </div>
        <ProductSuggestion product={randomizedProducts} />
        <ProductLink />
        <AboutUs />
      </div>
    </div>
  );
};

export default Page;
