import { IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaDcImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Data Controllers and Processors under GDPR",
    title: "Data Controllers and Processors under GDPR",
    href: "https://www.gdpr-advisor.com/roles-and-responsibilities-of-data-controllers-and-processors-under-gdpr/",
    coords: "809,638,1053,693",
    shape: "rect",
  },
];

const IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaDcPage =
  () => {
    return (
      <CommonImgMapPage
        pageTitle={`IG Required License GDPR Compliance (General Data Protection Regulation) Eligibility Criteria - GDPR`}
        image={
          IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaDcImage
        }
        backRoute="/ig-required-license-gdpr-compliance-general-data-protection-regulation"
        areas={areas}
        target="_blank"
      />
    );
  };

export default IgRequiredLicenseGdprComplianceGeneralDataProtectionRegulationEligibilityCriteriaDcPage;
