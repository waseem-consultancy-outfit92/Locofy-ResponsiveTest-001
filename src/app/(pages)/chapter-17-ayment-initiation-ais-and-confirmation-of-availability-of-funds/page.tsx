"use client";
import React from "react";
import MultiImagesNoBtn from "@/components/multi-images-no-btn";
import {
  paymentInitiationAisConfirmationAvailabilityFunds1,
  paymentInitiationAisConfirmationAvailabilityFunds2,
  paymentInitiationAisConfirmationAvailabilityFunds3,
} from "@/assets";

const paymentInitiationAisConfirmationAvailabilityFunds = () => {
  const handleCheckboxChange = (selectedValue: string, page: string) => {
    console.log(`Selected: ${selectedValue} on page: ${page}`);
  };
  return (
    <MultiImagesNoBtn
      backRoute="/payment-services-and-electronic-money-our-approach"
      pageTitle="FCA Application / FCA Guide to Payment Services & E-Money Regulation / Chapter 17: Payment initiation & Account information services and confirmation of availability of funds"
      images={[
        {
          src: paymentInitiationAisConfirmationAvailabilityFunds1,
          route:
            "/chapter-17-ayment-initiation-ais-and-confirmation-of-availability-of-funds",
          alt: "Image",
        },
        {
          src: paymentInitiationAisConfirmationAvailabilityFunds2,
          route: "/fca-exemption-from-contingency-mechanism",
          alt: "Image 1",
        },
        {
          src: paymentInitiationAisConfirmationAvailabilityFunds3,
          route:
            "/chapter-17-ayment-initiation-ais-and-confirmation-of-availability-of-funds",
          alt: "Image 2",
        },
      ]}
      onChange={handleCheckboxChange}
    />
  );
};

export default paymentInitiationAisConfirmationAvailabilityFunds;
