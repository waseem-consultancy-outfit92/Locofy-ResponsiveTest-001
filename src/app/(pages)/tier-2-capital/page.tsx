import {  OverViewOfOwnFundsDiagramFour } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / Safeguarding`}
      src={OverViewOfOwnFundsDiagramFour}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
