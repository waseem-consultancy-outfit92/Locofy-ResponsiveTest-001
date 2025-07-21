import { MarketDataOrderFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataOrderFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Market Data Order Form `}
      src={MarketDataOrderFormImage}
      backRoute="/market-data"
    />
  );
};

export default MarketDataOrderFormPage;
