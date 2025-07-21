import { MarketDataTransparencyDisclosureImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataTransparencyDisclosurePage = () => {
  return (
    <CommonPage
      pageTitle={`AQUIS EXCHANGE EUROPE  MARKET DATA TRANSPARENCY  DISCLOSURE 2024`}
      src={MarketDataTransparencyDisclosureImage}
      backRoute="/market-data"
    />
  );
};

export default MarketDataTransparencyDisclosurePage;
