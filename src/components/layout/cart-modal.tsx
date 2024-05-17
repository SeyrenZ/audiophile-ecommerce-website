import Link from "next/link";
import React from "react";
import { useCart } from "@app/context/product-context";
import Image from "next/image";

const CartModal = () => {
  const { cart, removeAllFromCart } = useCart();
  const isCartEmpty = cart.length === 0;
  console.log(isCartEmpty);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="absolute z-50 right-0 top-[129px] w-full max-w-[377px] h-auto max-h-[488px] p-8 bg-white rounded-lg flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-black trakcing-[1.29px]">
          Cart (0)
        </div>
        <button
          onClick={removeAllFromCart}
          className="text-[15px] leading-[25px] text-zinc-400 font-medium hover:underline"
        >
          Remove all
        </button>
      </div>
      <div className="w-full max-h-[226px] flex flex-col gap-y-6 overflow-scroll">
        {isCartEmpty && (
          <div className="text-sm font-bold tracking-widest text-zinc-400 flex justify-center">
            No items in cart
          </div>
        )}
        {cart.map((item, index) => (
          <div className="w-full flex items-center justify-between" key={index}>
            <div className="flex items-center gap-x-4">
              <div className="w-[64px] h-[64px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center">
                <Image src={item.image} width={36} height={40} alt={item.id} />
              </div>
              <div className="flex flex-col">
                <div className="uppercase text-[15px] leading-[25px] font-bold text-black">
                  {item.id}
                </div>
                <div className="text-[14px] leading-[25px] font-bold text-zinc-400">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
          TOTAL
        </div>
        <div className="text-lg font-bold text-black">$0.00</div>
      </div>
      <Link
        href="/checkout"
        onClick={(e) => {
          if (isCartEmpty) {
            e.preventDefault();
          }
        }}
        className={`w-full h-[48px] ${
          isCartEmpty
            ? "bg-primary-apricot cursor-not-allowed"
            : "bg-primary-copper"
        } hover:bg-primary-apricot text-[13px] tracking-[1px] text-white flex items-center justify-center`}
      >
        CHECKOUT
      </Link>
    </div>
  );
};

export default CartModal;
