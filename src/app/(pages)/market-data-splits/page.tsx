import { MarketDataSplitsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataSplitsPage = () => {
  return (
    <CommonPage
      pageTitle={`Market Data Splits`}
      src={MarketDataSplitsImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default MarketDataSplitsPage;
