import { RequiredDocumentsImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RequiredDocumentsPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={RequiredDocumentsImage1}
      backRoute="/ig-required-license-nist-national-institute-of-standards-and-technology"
    />
  );
};

export default RequiredDocumentsPage1;
