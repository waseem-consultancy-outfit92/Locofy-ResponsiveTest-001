import { TransactionsInternalServerErrorImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage1}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage1;
