import { TokenizationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TokenizationPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Tokenization `}
      src={TokenizationImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default TokenizationPage;
