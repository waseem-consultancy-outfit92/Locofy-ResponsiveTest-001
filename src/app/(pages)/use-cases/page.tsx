import { UseCasesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UseCasesPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Use Cases `}
      src={UseCasesImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default UseCasesPage;
