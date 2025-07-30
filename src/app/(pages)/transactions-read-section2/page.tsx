import { TransactionsReadImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage2}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage2;
