import { IgRequiredLicenseFcaFinancialConductAuthorityApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseFcaFinancialConductAuthorityApplicationProcessPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseFcaFinancialConductAuthorityApplicationProcessImage
        }
        backRoute="/ig-required-license-fca-financial-conduct-authority"
      />
    );
  };

export default IgRequiredLicenseFcaFinancialConductAuthorityApplicationProcessPage;
