import { AquisExchangeFairUsagePolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AquisExchangeFairUsagePolicyPage = () => {
  return (
    <CommonPage
      pageTitle={`Aquis Exchange Fair Usage Policy`}
      src={AquisExchangeFairUsagePolicyImage}
      backRoute="/rules-and-fees"
    />
  );
};

export default AquisExchangeFairUsagePolicyPage;
