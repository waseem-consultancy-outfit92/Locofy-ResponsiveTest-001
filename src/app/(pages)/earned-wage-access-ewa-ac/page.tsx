import { EarnedWageAccessEwaAcImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EarnedWageAccessEwaAcPage = () => {
  return (
    <CommonPage
      pageTitle="Earned Wage Access (EWA)"
      src={EarnedWageAccessEwaAcImage}
      backRoute="/earned-wage-access-ewa"
    />
  );
};

export default EarnedWageAccessEwaAcPage;
