import { IgRequiredLicenseFcaFinancialConductAuthorityEligibilityCriteriaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseFcaFinancialConductAuthorityEligibilityCriteriaPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseFcaFinancialConductAuthorityEligibilityCriteriaImage
        }
        backRoute="/ig-required-license-fca-financial-conduct-authority"
      />
    );
  };

export default IgRequiredLicenseFcaFinancialConductAuthorityEligibilityCriteriaPage;
