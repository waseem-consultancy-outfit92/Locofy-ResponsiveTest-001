import { TransactionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TransactionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Transactions `}
      src={TransactionsImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default TransactionsPage;
