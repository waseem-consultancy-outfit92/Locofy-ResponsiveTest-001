import { TransactionsReadImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsReadPage = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Read`}
      src={TransactionsReadImage}
      backRoute="/transactions"
    />
  );
};

export default TransactionsReadPage;
