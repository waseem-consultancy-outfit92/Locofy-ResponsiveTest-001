import { TransactionsForbiddenImage6 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage6 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage6}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage6;
