import { TransactionsForbiddenImage7 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage7 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage7}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage7;
