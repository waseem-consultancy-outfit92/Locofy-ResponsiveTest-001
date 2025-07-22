import { InitialCapitalRequirementsImageOne } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / Safeguarding`}
      src={InitialCapitalRequirementsImageOne}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
