import { InteroperabilityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InteroperabilityPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Interoperability `}
      src={InteroperabilityImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default InteroperabilityPage;
