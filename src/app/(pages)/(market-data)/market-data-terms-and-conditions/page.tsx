import { AquisExchangeMarketDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataTermsAndConditionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Aquis Exchange Market Data`}
      src={AquisExchangeMarketDataImage}
      backRoute="/market-data"
    />
  );
};

export default MarketDataTermsAndConditionsPage;
