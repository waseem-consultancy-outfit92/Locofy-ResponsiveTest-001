import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationRequiredDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationRequiredDocumentsPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationRequiredDocumentsImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationRequiredDocumentsPage;
