import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationPurposeOfProductCertificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationPurposeOfProductCertificationPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationPurposeOfProductCertificationImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationPurposeOfProductCertificationPage;
