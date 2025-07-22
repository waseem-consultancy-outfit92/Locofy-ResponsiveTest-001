import { AquisMatchingPoolAmpConditionalOrdersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AquisMatchingPoolAmpConditionalOrdersPage = () => {
  return (
    <CommonPage
      pageTitle={`AQUIS MATCHING POOL (AMP) & CONDITIONAL ORDERS`}
      src={AquisMatchingPoolAmpConditionalOrdersImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default AquisMatchingPoolAmpConditionalOrdersPage;
