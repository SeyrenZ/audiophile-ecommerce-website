import Link from "next/link";
import React from "react";
import { useCart } from "@app/context/product-context";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartModal = () => {
  const {
    cart,
    removeAllFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalPrice,
  } = useCart();
  const isCartEmpty = cart.length === 0;
  console.log(isCartEmpty);

  return (
    <div className="absolute z-50 sm:right-10 right-0 sm:left-auto left-0 sm:mx-0 mx-auto top-[129px] w-full sm:max-w-[377px] max-w-[350px] h-auto max-h-[488px] p-8 bg-white rounded-lg flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-black trakcing-[1.29px]">
          Cart ({cart.length})
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
        {cart.map((product, index) => (
          <div className="w-full flex items-center justify-between" key={index}>
            <div className="flex products-center gap-x-4">
              <div className="w-[64px] h-[64px] rounded-lg bg-primary-whiteSmoke flex items-center justify-center">
                <Image
                  src={product.image}
                  width={36}
                  height={40}
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
            <div className="w-[96px] h-[32px] bg-primary-whiteSmoke flex items-center justify-between">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="text-[5px] p-[19px] font-bold text-black "
              >
                <AiOutlineMinus />
              </button>
              <div className="text-xs font-bold text-[#1d2025]">
                {product.quantity}
              </div>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="text-[10px] p-[19px] font-extrabold text-primary-copper"
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
          TOTAL
        </div>
        <div className="text-lg font-bold text-black">
          {calculateTotalPrice().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
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
