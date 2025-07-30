import { TransactionsBadRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsBadRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Bad request`}
      src={TransactionsBadRequestImage}
      backRoute="/transactions"
    />
  );
};

export default TransactionsBadRequestPage;
