import { CommonEqultyTiers1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / Safeguarding`}
      src={CommonEqultyTiers1}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
