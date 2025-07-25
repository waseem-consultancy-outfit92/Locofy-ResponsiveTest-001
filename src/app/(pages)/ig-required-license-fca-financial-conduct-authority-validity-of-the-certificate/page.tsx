import { IgRequiredLicenseFcaFinancialConductAuthorityValidityOfTheCertificateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseFcaFinancialConductAuthorityValidityOfTheCertificatePage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseFcaFinancialConductAuthorityValidityOfTheCertificateImage
        }
        backRoute="/ig-required-license-fca-financial-conduct-authority"
      />
    );
  };

export default IgRequiredLicenseFcaFinancialConductAuthorityValidityOfTheCertificatePage;
