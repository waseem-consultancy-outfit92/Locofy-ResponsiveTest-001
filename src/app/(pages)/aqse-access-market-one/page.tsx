import {  AQSEAccessMarketTwo } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionReportingPage = () => {
  return (
    <CommonPage
      pageTitle={`AQSE Access Market – Hypothetical Example `}
      src={AQSEAccessMarketTwo}
      backRoute="/"
    />
  );
};

export default TransactionReportingPage;
