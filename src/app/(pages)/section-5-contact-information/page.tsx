import { Section5ContactInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section5ContactInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 5: Contact Information`}
      src={Section5ContactInformationImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section5ContactInformationPage;
