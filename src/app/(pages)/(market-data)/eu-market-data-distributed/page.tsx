import { EuMarketDataDistributedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EuMarketDataDistributedPage = () => {
  return (
    <CommonPage
      pageTitle={`Information on the content of the market data distributed by Aquis Exchange  Europe SAS`}
      src={EuMarketDataDistributedImage}
      backRoute="/eu-market-data-transparency-disclosure"
    />
  );
};

export default EuMarketDataDistributedPage;
