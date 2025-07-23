import { TransactionReportingAddendumImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionReportingAddendumPage = () => {
  return (
    <CommonPage
      pageTitle={`Transaction Reporting Addendum`}
      src={TransactionReportingAddendumImage}
      backRoute="/legal-agreements"
    />
  );
};

export default TransactionReportingAddendumPage;
