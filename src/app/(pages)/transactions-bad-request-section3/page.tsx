import { TransactionsBadRequestImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBadRequestPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Bad request`}
      src={TransactionsBadRequestImage3}
      backRoute="/transactions"
    />
  );
};

export default TransactionsBadRequestPage3;
