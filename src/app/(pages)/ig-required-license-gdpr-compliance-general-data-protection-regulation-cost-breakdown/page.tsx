import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationCostBreakdownImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationCostBreakdownPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationCostBreakdownImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationCostBreakdownPage;
