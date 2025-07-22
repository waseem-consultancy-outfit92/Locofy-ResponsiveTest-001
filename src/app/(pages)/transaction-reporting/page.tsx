import { TransactionReportingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionReportingPage = () => {
  return (
    <CommonPage
      pageTitle={`TRANSACTION REPORTING`}
      src={TransactionReportingImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default TransactionReportingPage;
