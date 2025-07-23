import { MarketDataCustomerInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MarketDataCustomerInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Customer Information`}
      src={MarketDataCustomerInformationImage}
      backRoute="/market-data-order-form"
    />
  );
};

export default MarketDataCustomerInformationPage;
