import { MarketDataTermsAppliedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataTermsAppliedPage = () => {
  return (
    <CommonPage
      pageTitle={`IPO High Level Timeline:`}
      src={MarketDataTermsAppliedImage}
      backRoute="/market-data-terms-and-conditions"
    />
  );
};

export default MarketDataTermsAppliedPage;
