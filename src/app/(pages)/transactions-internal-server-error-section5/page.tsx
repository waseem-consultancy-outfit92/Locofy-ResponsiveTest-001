import { TransactionsInternalServerErrorImage5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage5 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage5}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage5;
