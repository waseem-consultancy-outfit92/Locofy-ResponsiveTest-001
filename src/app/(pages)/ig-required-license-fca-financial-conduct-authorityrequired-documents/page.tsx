import { IgRequiredLicenseFcaFinancialConductAuthorityRequiredDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseFcaFinancialConductAuthorityRequiredDocumentsPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseFcaFinancialConductAuthorityRequiredDocumentsImage
        }
        backRoute="/ig-required-license-fca-financial-conduct-authority"
      />
    );
  };

export default IgRequiredLicenseFcaFinancialConductAuthorityRequiredDocumentsPage;
