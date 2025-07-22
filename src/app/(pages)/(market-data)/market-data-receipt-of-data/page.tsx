import { MarketDataReceiptOfDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataReceiptOfDataPage = () => {
  return (
    <CommonPage
      pageTitle={`Receipt of Data`}
      src={MarketDataReceiptOfDataImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataReceiptOfDataPage;
