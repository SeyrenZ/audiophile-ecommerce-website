'use client'
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import ProductDetail from "@app/components/layout/product-detail"

type ProductDescription = {
  id: number;
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
}



const Page = () => {
  const [productData, setProductData] = useState<ProductDescription[]>([]);
  const params = useParams();
  console.log(params)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/headphones-product-data.json");
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
    <div className="lg:py-[160px] py-[65px] space-y-[160px]">
    {productData.filter(product => product.id === Number(params.productId)).map((product, index) => <ProductDetail key={index} {...product} />)}
    </div>
    </div>
  )
}

export default Page