import { CompanyVerification321Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CompanyVerification321Page = () => {
  return (
    <CommonPage
      pageTitle={`Company Verification 3.2.1`}
      src={CompanyVerification321Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default CompanyVerification321Page;
