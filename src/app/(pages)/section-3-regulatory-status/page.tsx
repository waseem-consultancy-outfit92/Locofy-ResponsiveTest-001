import { Section3RegulatoryStatusImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section3RegulatoryStatusPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 3: Regulatory Status`}
      src={Section3RegulatoryStatusImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section3RegulatoryStatusPage;
