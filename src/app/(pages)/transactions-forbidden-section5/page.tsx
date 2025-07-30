import { TransactionsForbiddenImage5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage5 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage5}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage5;
