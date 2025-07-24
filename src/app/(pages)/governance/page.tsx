import { GovernanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GovernancePage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Governance `}
      src={GovernanceImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default GovernancePage;
