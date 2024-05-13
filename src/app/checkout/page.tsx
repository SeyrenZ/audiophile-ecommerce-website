import React from "react";
import CheckoutForm from "@app/components/checkout/checkout-form";
import GoBackLink from "@app/components/layout/back-link";

const Checkout = () => {
  return (
    <div className="lg:py-20 sm:py-8 py-4 space-y-[160px]">
      <div className="lg:space-y-14 space-y-6">
        <GoBackLink link="/" />
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
