import { MarketDataUseOfDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataUseOfDataPage = () => {
  return (
    <CommonPage
      pageTitle={`Use of Data`}
      src={MarketDataUseOfDataImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataUseOfDataPage;
