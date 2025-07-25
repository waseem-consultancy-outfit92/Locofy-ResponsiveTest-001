import { CostBreakdownImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CostBreakdownPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={CostBreakdownImage1}
      backRoute="/ig-required-license-nist-national-institute-of-standards-and-technology"
    />
  );
};

export default CostBreakdownPage1;
