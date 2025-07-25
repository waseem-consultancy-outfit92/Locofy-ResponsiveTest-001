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

const IgRequiredLicenseNistNationalInstituteOfStandardsAndTechnologyPageData = [
  {
    key: "ig-1",
    link: "/purpose-of-product-certification-section2",
    icon: img1IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/where-to-apply-section1",
    icon: img2IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/eligibility-criteria-section1",
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
    link: "/required-documents-section1",
    icon: img5IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/cost-breakdown-section1",
    icon: img6IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/timeline-for-certification-section2",
    icon: img7IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/validity-of-the-certificate-section1",
    icon: img8IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredLicenseNistNationalInstituteOfStandardsAndTechnologyPage =
  () => {
    return (
      <MultiPathPage
        arrayData={
          IgRequiredLicenseNistNationalInstituteOfStandardsAndTechnologyPageData
        }
        pageTitle="NIST (National Institute of Standards and Technology)"
        backRoute="/ig-required-licenses"
      />
    );
  };

export default IgRequiredLicenseNistNationalInstituteOfStandardsAndTechnologyPage;
