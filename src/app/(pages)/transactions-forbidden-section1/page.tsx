import { TransactionsForbiddenImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage1}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage1;
