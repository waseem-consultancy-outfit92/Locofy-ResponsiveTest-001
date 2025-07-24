import { DataOwnershipImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataOwnershipPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Data Ownership `}
      src={DataOwnershipImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default DataOwnershipPage;
