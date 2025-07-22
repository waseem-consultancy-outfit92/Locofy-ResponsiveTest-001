import { LiquidityProviderAddendumImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LiquidityProviderAddendumPage = () => {
  return (
    <CommonPage
      pageTitle={`Liquidity Provider Addendum`}
      src={LiquidityProviderAddendumImage}
      backRoute="/legal-agreements"
    />
  );
};

export default LiquidityProviderAddendumPage;
