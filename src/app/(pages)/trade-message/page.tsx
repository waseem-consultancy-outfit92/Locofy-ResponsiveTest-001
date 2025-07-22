import { TradeMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradeMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Trade Message`}
      src={TradeMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default TradeMessagePage;
