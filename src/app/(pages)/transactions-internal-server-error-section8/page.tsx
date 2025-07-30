import { TransactionsInternalServerErrorImage8 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage8 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage8}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage8;
