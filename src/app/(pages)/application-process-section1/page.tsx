import { ApplicationProcessImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationProcessPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={ApplicationProcessImage1}
      backRoute="/ig-required-license-nist-national-institute-of-standards-and-technology"
    />
  );
};

export default ApplicationProcessPage1;
