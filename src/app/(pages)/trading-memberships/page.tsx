import { TradingMembershipsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradingMembershipsPage = () => {
  return (
    <CommonPage
      pageTitle={`TRADING MEMBERSHIPS`}
      src={TradingMembershipsImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default TradingMembershipsPage;
