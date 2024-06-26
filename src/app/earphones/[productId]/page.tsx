"use client";
import { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { GetRandomizedProducts } from "@app/lib/product-utils";
import ProductDetail from "@app/components/layout/product-detail";
import AboutUs from "@app/components/layout/about-us";
import ProductLink from "@app/components/layout/product-link";
import GoBackLink from "@app/components/layout/back-link";
import ProductLoadingSkeleton from "@app/components/layout/product-loading-skeleton";
import ProductSuggestion from "@app/components/layout/product-suggestion";
import { ProductDescription } from "@app/lib/product-utils";

const Page = () => {
  const [productData, setProductData] = useState<ProductDescription[]>([]);
  const [earphonesData, setEarphonesData] = useState<ProductDescription[]>([]);
  const randomizedProducts = GetRandomizedProducts(productData);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/product-data.json");
        const data = await response.json();
        setProductData(data);
        const earphones = data.filter(
          (product: ProductDescription) => product.category === "earphones"
        );
        setEarphonesData(earphones);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (earphonesData.length === 0) return <ProductLoadingSkeleton />; // Wait for data to be fetched
  const product = earphonesData.find(
    (product) => product.id === String(params.productId)
  );
  if (!product) {
    notFound(); // Call notFound() if product is not found
  }

  return (
    <div>
      <div className="lg:py-20 sm:py-8 py-4 space-y-[160px]">
        <div className="lg:space-y-14 space-y-6">
          <GoBackLink link="/earphones" />
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
