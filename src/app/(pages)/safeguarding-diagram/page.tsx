import { InitialCapitalRequirementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialCapitalRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Initial capital requirements `}
      src={InitialCapitalRequirementsImage}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default InitialCapitalRequirementsPage;
