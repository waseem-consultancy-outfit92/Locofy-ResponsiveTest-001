import { Section2ServicesRequiredImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section2ServicesRequiredPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 2: Services Required`}
      src={Section2ServicesRequiredImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section2ServicesRequiredPage;
