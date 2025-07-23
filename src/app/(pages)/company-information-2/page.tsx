import { CompanyInformation2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CompanyInformation2Page = () => {
  return (
    <CommonPage
      pageTitle={`Company Information 2`}
      src={CompanyInformation2Image}
      backRoute="/connectivity-order-form"
    />
  );
};

export default CompanyInformation2Page;
