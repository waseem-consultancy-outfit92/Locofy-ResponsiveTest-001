import { MarketAtCloseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketAtClosePage = () => {
  return (
    <CommonPage
      pageTitle={`MARKET AT CLOSE`}
      src={MarketAtCloseImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default MarketAtClosePage;
