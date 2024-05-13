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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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
      username: "",
    },
  });

  return (
    <div className="w-full h-full container">
      <div className="w-full h-full max-w-[1110px] mx-auto flex justify-between">
        <div className="w-full max-w-[730px] h-auto min-h-[1126px] px-12 py-14 bg-white rounded-lg flex flex-col gap-y-[41px]">
          <div className="text-[32px] leading-[38px] font-bold tracking-[1.14px]">
            CHECKOUT
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-[41px]"
            >
              <div className="flex flex-col gap-y-4">
                <div className="text-[13px] leading-[25px] tracking-[0.93px] font-bold text-primary-copper">
                  BILLING DETAILS
                </div>
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Alexai Ward"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="alexai@gmail.com"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 202-555-0136"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
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
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="1137 Williams Avenue"
                              {...field}
                              className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                            />
                          </FormControl>
                          <FormDescription></FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10001"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="New York"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="United States"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
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
                    name="username"
                    render={({ field }) => (
                      <FormItem className="row-span-2">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="w-full h-[58px] px-4 bg-white border-[1px] border-primary-whiteSmoke rounded-lg flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="" />
                              </FormControl>
                              <FormLabel className="text-[14px] font-bold">
                                e-Money
                              </FormLabel>
                            </FormItem>
                            <FormItem className="w-full h-[58px] px-4 bg-white border-[1px] border-primary-whiteSmoke rounded-lg flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="" />
                              </FormControl>
                              <FormLabel className="text-[14px] font-bold">
                                Cash On Delivery
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>e-Money Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="238521993"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>e-Money PIN</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="6891"
                            {...field}
                            className="px-6 py-[28px] border-[1px] border-primary-whiteSmoke rounded-lg"
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
