import { MarketDataConnectivityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataConnectivityPage = () => {
  return (
    <CommonPage
      pageTitle={`Connectivity`}
      src={MarketDataConnectivityImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataConnectivityPage;
