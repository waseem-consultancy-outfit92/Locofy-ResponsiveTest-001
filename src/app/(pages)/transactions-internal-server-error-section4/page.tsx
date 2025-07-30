import { TransactionsInternalServerErrorImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage4 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage4}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage4;
