import { SecurityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SecurityPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Security `}
      src={SecurityImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default SecurityPage;
