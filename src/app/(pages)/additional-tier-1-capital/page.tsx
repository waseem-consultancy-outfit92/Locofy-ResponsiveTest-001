import { AdditionalTier1Capital } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / Safeguarding`}
      src={AdditionalTier1Capital}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
