import { Web3IntroductionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Web3IntroductionPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Web3 Introduction`}
      src={Web3IntroductionImage}
      backRoute="/web3-applications-in-crypto"
    />
  );
};

export default Web3IntroductionPage;
