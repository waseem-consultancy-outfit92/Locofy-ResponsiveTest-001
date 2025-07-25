import { PurposeOfProductCertificationImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurposeOfProductCertificationPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={PurposeOfProductCertificationImage1}
      backRoute="/ig-required-license-fca-financial-conduct-authority"
    />
  );
};

export default PurposeOfProductCertificationPage1;
