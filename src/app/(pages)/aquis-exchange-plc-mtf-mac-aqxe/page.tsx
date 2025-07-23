import { MarketAtCloseMarketDataSplitsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketAtCloseMarketDataSplitsPage = () => {
  return (
    <CommonPage
      pageTitle={`Market at Close Market Data Splits`}
      src={MarketAtCloseMarketDataSplitsImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default MarketAtCloseMarketDataSplitsPage;
