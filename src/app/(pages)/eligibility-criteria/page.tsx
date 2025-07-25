import { EligibilityCriteriaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EligibilityCriteriaPage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={EligibilityCriteriaImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default EligibilityCriteriaPage;
