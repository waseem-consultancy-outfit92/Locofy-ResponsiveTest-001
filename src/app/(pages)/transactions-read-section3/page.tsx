import { TransactionsReadImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage3}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage3;
