import { TransactionsInternalServerErrorImage7 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage7 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage7}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage7;
