import { TransactionsInternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsInternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Internal Server Error`}
      src={TransactionsInternalServerErrorImage}
      backRoute="/transactions"
    />
  );
};

export default TransactionsInternalServerErrorPage;
