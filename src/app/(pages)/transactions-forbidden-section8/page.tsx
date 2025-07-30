import { TransactionsForbiddenImage8 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage8 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage8}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage8;
