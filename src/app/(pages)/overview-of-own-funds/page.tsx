import { OverViewOfOwnFunds } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`Overview of Own Funds `}
      src={OverViewOfOwnFunds}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
