import { TradeCaptureMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradeCaptureMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Trade Capture Message`}
      src={TradeCaptureMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default TradeCaptureMessagePage;
