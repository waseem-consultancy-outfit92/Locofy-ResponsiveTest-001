import { DecentralizedApplicationsDappsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DecentralizedApplicationsDappsPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Roles / Decentralized Applications (dApps) `}
      src={DecentralizedApplicationsDappsImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default DecentralizedApplicationsDappsPage;
