import { TransactionsInternalServerErrorImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage3}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage3;
