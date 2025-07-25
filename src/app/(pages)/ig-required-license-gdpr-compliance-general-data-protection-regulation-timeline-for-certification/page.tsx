import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationTimelineForCertificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationTimelineForCertificationPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Validity of the Certificate`}
        src={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationTimelineForCertificationImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationTimelineForCertificationPage;
