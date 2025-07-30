import { TransactionsInternalServerErrorImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage2}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage2;
