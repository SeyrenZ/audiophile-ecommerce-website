"use client";
import React, { useState } from "react";
import { ChecklistIcon } from "../svg";
import { useCart } from "@app/context/product-context";
import Image from "next/image";
import Link from "next/link";

const CheckoutModal = () => {
  const { cart, calculateGrandTotal } = useCart();
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="absolute z-50 right-0 left-0 top-[230px] mx-auto sm:p-12 p-8 w-full sm:max-w-[540px] max-w-[350px] h-auto bg-white
        rounded-lg flex flex-col items-start sm:gap-y-8 gap-y-6"
    >
      <div className="w-[64px] h-[64px] rounded-full bg-primary-copper flex items-center justify-center">
        <ChecklistIcon />
      </div>
      <div className="flex flex-col items-start sm:gap-y-6 gap-y-4">
        <div className="text-[32px] leading-[36px] tracking-[1.14px] font-bold text-black">
          THANK YOU
          <br />
          FOR THE ORDER
        </div>
        <div className="text-[15px] leading-[25px] font-medium text-zinc-400">
          you will receive an email confirmation shortly.
        </div>
      </div>
      <div className="w-full h-auto flex sm:flex-row flex-col">
        <div className="w-full sm:max-w-[246px] p-4 sm:rounded-l-lg rounded-t-lg bg-primary-whiteSmoke flex flex-col gap-y-3">
          {showAll
            ? cart.map((product, index) => (
                <div
                  className="w-full flex items-start justify-between"
                  key={index}
                >
                  <div className="flex items-center gap-x-4">
                    <div className="w-[50px] h-[50px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center">
                      <Image
                        src={product.image}
                        width={28}
                        height={32}
                        alt={product.id}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="uppercase text-[15px] leading-[25px] font-bold text-black">
                        {product.id}
                      </div>
                      <div className="text-[14px] leading-[25px] font-bold text-zinc-400">
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-[15px] leading-[25px] font-bold text-zinc-400">
                    {product.quantity}x
                  </div>
                </div>
              ))
            : cart.slice(0, 1).map((product, index) => (
                <div
                  className="w-full flex items-start justify-between"
                  key={index}
                >
                  <div className="flex items-center gap-x-4">
                    <div className="w-[50px] h-[50px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center">
                      <Image
                        src={product.image}
                        width={28}
                        height={32}
                        alt={product.id}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="uppercase text-[15px] leading-[25px] font-bold text-black">
                        {product.id}
                      </div>
                      <div className="text-[14px] leading-[25px] font-bold text-zinc-400">
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-[15px] leading-[25px] font-bold text-zinc-400">
                    {product.quantity}x
                  </div>
                </div>
              ))}
          {showAll ? (
            <button
              className="w-full border-t-[1px] pt-3 border-zinc-400 text-[12px] font-bold text-zinc-500"
              onClick={() => setShowAll(false)}
            >
              View less
            </button>
          ) : (
            <button
              className="w-full border-t-[1px] pt-3 border-zinc-400 text-[12px] font-bold text-zinc-500"
              onClick={() => setShowAll(true)}
            >
              See Other {cart.length} item(s)
            </button>
          )}
        </div>
        <div className="w-full sm:max-w-[198px] p-8 sm:rounded-r-lg rounded-b-lg bg-black flex flex-col items-start justify-center gap-y-2">
          <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
            GRAND TOTAL
          </div>
          <div className="text-lg font-bold text-white">
            {calculateGrandTotal().toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="w-full h-[48px] bg-primary-copper hover:bg-primary-apricot text-white text-[13px] font-bold tracking-[1px] flex items-center justify-center"
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default CheckoutModal;
