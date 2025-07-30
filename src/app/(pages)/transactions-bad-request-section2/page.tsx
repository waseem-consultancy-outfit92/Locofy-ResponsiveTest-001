import { TransactionsBadRequestImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBadRequestPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Bad request`}
      src={TransactionsBadRequestImage2}
      backRoute="/transactions"
    />
  );
};

export default TransactionsBadRequestPage2;
