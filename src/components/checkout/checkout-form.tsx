"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useCart } from "@app/context/product-context";
import Image from "next/image";
import CheckoutModal from "../layout/checkout-modal";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email("Invalid email address."),
    phoneNumber: z.string().min(10, {
      message: "Phone number must be at least 10 characters.",
    }),
    address: z.string().min(2, {
      message: "Address must be at least 2 characters.",
    }),
    city: z.string().min(2, {
      message: "City must be at least 2 characters.",
    }),
    country: z.string().min(2, {
      message: "Country must be at least 2 characters.",
    }),
    zipCode: z.string().min(5, {
      message: "ZIP Code must be at least 5 characters.",
    }),
    eMoneyPin: z
      .string()
      .min(4, {
        message: "invalid eMoney PIN",
      })
      .optional(),
    eMoneyNumber: z
      .string()
      .min(10, {
        message: "invalid eMoney Number",
      })
      .optional(),
    paymentMethod: z.enum(["e-money", "cash-on-delivery"], {
      message: "You need to select a payment method.",
    }),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "e-money") {
        return data.eMoneyPin && data.eMoneyNumber;
      }
      return true;
    },
    {
      message:
        "eMoney Pin and eMoney Number are required for e-money payment method",
      path: ["eMoneyPin", "eMoneyNumber"],
    }
  );

export function onSubmit(
  values: z.infer<typeof formSchema>,
  setIsModalOpen: (isModalOpen: boolean) => void
) {
  if (values.paymentMethod === "cash-on-delivery") {
    values.eMoneyNumber = "";
    values.eMoneyPin = "";
  }
  console.log(values);
  setIsModalOpen(true);
}

const CheckoutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: undefined,
      address: "",
      city: "",
      country: "",
      zipCode: undefined,
      eMoneyPin: undefined,
      eMoneyNumber: undefined,
      paymentMethod: "e-money",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const paymentMethods = form.watch("paymentMethod");
  const {
    cart,
    calculateGrandTotal,
    calculateTotalPrice,
    calculateProductVat,
    shippingCost,
  } = useCart();
  const isCartEmpty = cart.length === 0;

  return (
    <div className="w-full h-auto container">
      <div
        className={`fixed inset-0 bg-black opacity-50 z-30 ${
          isModalOpen ? "visible" : "invisible"
        } transition ease-in-out duration-700 `}
      />
      {isModalOpen && <CheckoutModal />}
      <div className="w-full h-full max-w-[1110px] mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              onSubmit(data, setIsModalOpen)
            )}
            className="w-full h-auto flex lg:flex-row flex-col lg:justify-between lg:gap-y-0 gap-y-8"
          >
            <div className="order-2 w-full sm;p-8 p-6 lg:max-w-[350px] min-h-[385px] max-h-[612px] bg-white rounded-lg flex flex-col self-start gap-y-8">
              <div className="text-lg font-bold tracking-[1.29px]">SUMMARY</div>
              <div className="w-full max-h-[226px] flex flex-col gap-y-6 overflow-scroll">
                {isCartEmpty && (
                  <div className="text-sm font-bold tracking-widest text-zinc-400 flex justify-center">
                    No items in cart
                  </div>
                )}
                {cart.map((product, index) => (
                  <div
                    className="w-full flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center gap-x-4">
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
                    <div>{product.quantity}x</div>
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col gap-y-2">
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
                <div className="flex items-center justify-between">
                  <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                    SHIPPING
                  </div>
                  <div className="text-lg font-bold text-black">
                    {shippingCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                    VAT (INCLUDED)
                  </div>
                  <div className="text-lg font-bold text-black">
                    {calculateProductVat().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                    GRAND TOTAL
                  </div>
                  <div className="text-lg font-bold text-primary-copper">
                    {calculateGrandTotal().toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>
              <Button
                onClick={(e) => {
                  if (isCartEmpty) {
                    e.preventDefault();
                  }
                }}
                type="submit"
                className={`rounded-none h-[48px] ${
                  isCartEmpty
                    ? "bg-primary-apricot cursor-not-allowed"
                    : "bg-primary-copper"
                } hover:bg-primary-apricot`}
              >
                CONTINUE & PAY
              </Button>
            </div>
            <div className="order-1 w-full lg:max-w-[730px] h-auto sm:px-12 px-6 sm:py-14 py-7 bg-white rounded-lg flex flex-col gap-y-[41px]">
              <div className="text-[32px] leading-[38px] font-bold tracking-[1.14px]">
                CHECKOUT
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="text-[13px] leading-[25px] tracking-[0.93px] font-bold text-primary-copper">
                  BILLING DETAILS
                </div>
                <div className="w-full grid sm:grid-cols-2 grid-cols-1  gap-x-4 gap-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            Name
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="Alexai Ward"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            Email
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="alexai@gmail.com"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            Phone Number
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="+1 202-555-0136"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="text-[13px] leading-[25px] tracking-[0.93px] font-bold text-primary-copper">
                  SHIPPING DETAILS
                </div>
                <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
                  <div className="sm:col-span-2">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel className="text-sm font-bold">
                              Address
                            </FormLabel>
                            <FormMessage className="text-xs font-thin" />
                          </div>
                          <FormControl>
                            <Input
                              placeholder="1137 Williams Avenue"
                              {...field}
                              className="px-6 py-[28px] border-[1px] rounded-lg"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            ZIP Code
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="10001"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            City
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="New York"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-sm font-bold">
                            Country
                          </FormLabel>
                          <FormMessage className="text-xs font-thin" />
                        </div>
                        <FormControl>
                          <Input
                            placeholder="United States"
                            {...field}
                            className="px-6 py-[28px] border-[1px] rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="text-[13px] leading-[25px] tracking-[0.93px] font-bold text-primary-copper">
                  SHIPPING DETAILS
                </div>
                <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
                  <div className="row-span-2">Payment method</div>
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="row-span-2">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="w-full h-[58px] px-4 bg-white border-[1px] border-zinc-300 rounded-lg flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="e-money" />
                              </FormControl>
                              <FormLabel className="text-[14px] font-bold">
                                e-Money
                              </FormLabel>
                            </FormItem>
                            <FormItem className="w-full h-[58px] px-4 bg-white border-[1px] border-zinc-300 rounded-lg flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="cash-on-delivery" />
                              </FormControl>
                              <FormLabel className="text-[14px] font-bold">
                                Cash On Delivery
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {paymentMethods === "e-money" && (
                    <>
                      <FormField
                        control={form.control}
                        name="eMoneyNumber"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center justify-between">
                              <FormLabel className="text-sm font-bold">
                                e-Money Number
                              </FormLabel>
                              <FormMessage className="text-xs font-thin" />
                            </div>
                            <FormControl>
                              <Input
                                placeholder="238521993"
                                {...field}
                                className="px-6 py-[28px] border-[1px] rounded-lg"
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eMoneyPin"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center justify-between">
                              <FormLabel className="text-sm font-bold">
                                e-Money PIN
                              </FormLabel>
                              <FormMessage className="text-xs font-thin" />
                            </div>
                            <FormControl>
                              <Input
                                placeholder="6891"
                                {...field}
                                className="px-6 py-[28px] border-[1px] rounded-lg"
                              />
                            </FormControl>
                            <FormDescription></FormDescription>
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
