import { PurposeOfProductCertificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurposeOfProductCertificationPage = () => {
  return (
    <CommonPage
      pageTitle={`Purpose of Product Certification`}
      src={PurposeOfProductCertificationImage}
      backRoute="/ig-required-memberships-csa-cloud-security-alliance"
    />
  );
};

export default PurposeOfProductCertificationPage;
