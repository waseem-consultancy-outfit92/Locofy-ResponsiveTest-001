import { TradeBustMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradeBustMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Trade Bust Message `}
      src={TradeBustMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default TradeBustMessagePage;
