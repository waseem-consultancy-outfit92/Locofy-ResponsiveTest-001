import { TransactionsForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Transactions Forbidden`}
      src={TransactionsForbiddenImage}
      backRoute="/transactions"
    />
  );
};

export default TransactionsForbiddenPage;
