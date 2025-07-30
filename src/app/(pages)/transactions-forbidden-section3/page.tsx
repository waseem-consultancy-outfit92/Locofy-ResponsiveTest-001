import { TransactionsForbiddenImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage3}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage3;
