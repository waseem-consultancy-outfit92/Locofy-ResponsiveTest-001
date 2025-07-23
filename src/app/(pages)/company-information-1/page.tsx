import { CompanyInformation1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CompanyInformation1Page = () => {
  return (
    <CommonPage
      pageTitle={`Company Information 1`}
      src={CompanyInformation1Image}
      backRoute="/software-vendor-application-form"
    />
  );
};

export default CompanyInformation1Page;
