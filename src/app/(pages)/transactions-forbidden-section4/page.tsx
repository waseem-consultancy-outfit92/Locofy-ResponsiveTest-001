import { TransactionsForbiddenImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage4 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage4}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage4;
