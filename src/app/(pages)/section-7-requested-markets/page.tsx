import { Section7RequestedMarketsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section7RequestedMarketsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 7: Requested Markets`}
      src={Section7RequestedMarketsImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section7RequestedMarketsPage;
