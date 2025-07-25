import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaGdprImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Data controller Criteria",
    title: "Data controller Criteria",
    href: "/ig-required-license-gdpr-compliance-general-data-protection-regulation-eligibility-criteria-dc",
    coords: "4,496,314,544",
    shape: "rect",
  },
];

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaGdprPage =
  () => {
    return (
      <CommonImgMapPage
        pageTitle={`IG Required License GDPR Compliance (General Data Protection Regulation) Eligibility Criteria - GDPR`}
        image={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaGdprImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
        areas={areas}
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaGdprPage;
