import { TransactionsInternalServerErrorImage6 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage6 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage6}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage6;
