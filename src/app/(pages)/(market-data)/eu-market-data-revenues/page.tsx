import { EuMarketDataRevenuesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EuMarketDataRevenuesPage = () => {
  return (
    <CommonPage
      pageTitle={`Information on the content of the market data distributed by Aquis Exchange  Europe SAS`}
      src={EuMarketDataRevenuesImage}
      backRoute="/eu-market-data-transparency-disclosure"
    />
  );
};

export default EuMarketDataRevenuesPage;
