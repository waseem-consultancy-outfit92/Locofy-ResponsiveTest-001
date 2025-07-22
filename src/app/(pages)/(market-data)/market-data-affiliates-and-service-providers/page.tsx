import { MarketDataAffiliatesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataAffiliatesPage = () => {
  return (
    <CommonPage
      pageTitle={`Affiliates and Service Providers`}
      src={MarketDataAffiliatesImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataAffiliatesPage;
