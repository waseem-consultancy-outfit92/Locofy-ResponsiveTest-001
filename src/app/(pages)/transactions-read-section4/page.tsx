import { TransactionsReadImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage4 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage4}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage4;
