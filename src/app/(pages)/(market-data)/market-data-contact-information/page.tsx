import { MarketDataContactInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataContactInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Market Data Contact Information`}
      src={MarketDataContactInformationImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataContactInformationPage;
