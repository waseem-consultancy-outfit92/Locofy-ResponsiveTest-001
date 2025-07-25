import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationApplicationProcessPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationApplicationProcessImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationApplicationProcessPage;
