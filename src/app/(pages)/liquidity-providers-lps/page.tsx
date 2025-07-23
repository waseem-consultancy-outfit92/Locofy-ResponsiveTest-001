import { LiquidityProvidersLpsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LiquidityProvidersLpsPage = () => {
  return (
    <CommonPage
      pageTitle={`Liquidity Providers (LPs)`}
      src={LiquidityProvidersLpsImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default LiquidityProvidersLpsPage;
