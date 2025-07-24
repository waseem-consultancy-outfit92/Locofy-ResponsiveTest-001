import { EcosystemExamplesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EcosystemExamplesPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Ecosystem Examples `}
      src={EcosystemExamplesImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default EcosystemExamplesPage;
