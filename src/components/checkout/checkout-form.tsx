"use client";
import React from "react";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.number().min(10, {
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
  zipCode: z.number().min(5, {
    message: "ZIP Code must be at least 5 characters.",
  }),
  eMoneyPin: z.number().min(2, {
    message: "eMoney Pin must be at least 2 characters.",
  }),
  eMoneyNumber: z.number().min(2, {
    message: "eMoney Number must be at least 2 characters.",
  }),
  paymentMethod: z.enum(["e-money", "cash-on-delivery"], {
    message: "You need to select a payment method.",
  }),
});

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
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

  const paymentMethods = form.watch("paymentMethod");

  return (
    <div className="w-full h-full container">
      <div className="w-full h-full max-w-[1110px] mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex justify-between"
          >
            <div className="w-full max-w-[730px] h-auto min-h-[1126px] px-12 py-14 bg-white rounded-lg flex flex-col gap-y-[41px]">
              <div className="text-[32px] leading-[38px] font-bold tracking-[1.14px]">
                CHECKOUT
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="text-[13px] leading-[25px] tracking-[0.93px] font-bold text-primary-copper">
                  BILLING DETAILS
                </div>
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-6">
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
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-6">
                  <div className="col-span-2">
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
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-6">
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
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
