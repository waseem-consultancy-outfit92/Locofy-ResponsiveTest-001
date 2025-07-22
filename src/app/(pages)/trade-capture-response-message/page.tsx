import { TradeCaptureResponseMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradeCaptureResponseMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Trade Capture Response Message`}
      src={TradeCaptureResponseMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default TradeCaptureResponseMessagePage;
