import { TransactionsReadImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage1}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage1;
