import { Section4ComplianceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section4CompliancePage = () => {
  return (
    <CommonPage
      pageTitle={`Section 4: Compliance`}
      src={Section4ComplianceImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section4CompliancePage;
