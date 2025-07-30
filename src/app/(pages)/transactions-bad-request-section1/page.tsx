import { TransactionsBadRequestImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBadRequestPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Bad request`}
      src={TransactionsBadRequestImage1}
      backRoute="/transactions"
    />
  );
};

export default TransactionsBadRequestPage1;
