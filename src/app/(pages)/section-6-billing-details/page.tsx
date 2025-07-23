import { Section6BillingDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section6BillingDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 6: Billing Details`}
      src={Section6BillingDetailsImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section6BillingDetailsPage;
