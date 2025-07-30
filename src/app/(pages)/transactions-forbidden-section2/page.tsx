import { TransactionsForbiddenImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage2}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage2;
