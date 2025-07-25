"use client";
import { MultiPathPage } from "@/components";
import {
  img1IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img2IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img3IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img4IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img5IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img6IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img7IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
  img8IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
} from "@/assets";
import React from "react";

const IgRequiredLicenseFcaFinancialConductAuthorityPageData = [
  {
    key: "ig-1",
    link: "/purpose-of-product-certification-section1",
    icon: img1IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/ig-required-license-fca-financial-conduct-authority-where-to-apply",
    icon: img2IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/ig-required-license-fca-financial-conduct-authority-eligibility-criteria",
    icon: img3IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/ig-required-license-fca-financial-conduct-authority-application-process",
    icon: img4IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/ig-required-license-fca-financial-conduct-authorityrequired-documents",
    icon: img5IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/ig-required-license-fca-financial-conduct-authority-cost-breakdown",
    icon: img6IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/timeline-for-certification-section1",
    icon: img7IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/validity-of-the-certificateig-required-license-fca-financial-conduct-authority-validity-of-the-certificate",
    icon: img8IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredLicenseFcaFinancialConductAuthorityPage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredLicenseFcaFinancialConductAuthorityPageData}
      pageTitle="FCA (Financial Conduct Authority)"
      backRoute="/ig-required-licenses"
    />
  );
};

export default IgRequiredLicenseFcaFinancialConductAuthorityPage;
