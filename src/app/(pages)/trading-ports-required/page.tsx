import { TradingPortsRequiredImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradingPortsRequiredPage = () => {
  return (
    <CommonPage
      pageTitle={`Trading Ports Required`}
      src={TradingPortsRequiredImage}
      backRoute="/connectivity-order-form"
    />
  );
};

export default TradingPortsRequiredPage;
