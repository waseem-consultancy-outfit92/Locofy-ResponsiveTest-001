import { DecentralizedFinanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DecentralizedFinancePage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Decentralized Finance `}
      src={DecentralizedFinanceImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default DecentralizedFinancePage;
