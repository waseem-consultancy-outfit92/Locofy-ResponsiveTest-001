import { MarketDataTermsAppliedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataTermsAppliedPage = () => {
  return (
    <CommonPage
      pageTitle={`In these terms and conditions, the following definitions apply:`}
      src={MarketDataTermsAppliedImage}
      backRoute="/market-data-terms-and-conditions"
    />
  );
};

export default MarketDataTermsAppliedPage;
