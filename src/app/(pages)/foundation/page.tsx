import { FoundationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FoundationPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Foundation`}
      src={FoundationImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default FoundationPage;
