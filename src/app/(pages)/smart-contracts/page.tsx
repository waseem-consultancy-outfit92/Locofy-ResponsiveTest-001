import { SmartContractsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SmartContractsPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Smart Contracts `}
      src={SmartContractsImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default SmartContractsPage;
