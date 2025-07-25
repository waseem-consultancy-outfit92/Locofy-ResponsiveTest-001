import { EligibilityCriteriaImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EligibilityCriteriaPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={EligibilityCriteriaImage1}
      backRoute="/ig-required-license-nist-national-institute-of-standards-and-technology"
    />
  );
};

export default EligibilityCriteriaPage1;
