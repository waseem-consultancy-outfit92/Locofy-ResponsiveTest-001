import { MarketDataAuditPolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataAuditPolicyPage = () => {
  return (
    <CommonPage
      pageTitle={`AQUIS MARKET DATA AUDIT`}
      src={MarketDataAuditPolicyImage}
      backRoute="/market-data"
    />
  );
};

export default MarketDataAuditPolicyPage;
