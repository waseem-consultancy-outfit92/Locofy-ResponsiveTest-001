import { TransactionsReadImage5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage5 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage5}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage5;
