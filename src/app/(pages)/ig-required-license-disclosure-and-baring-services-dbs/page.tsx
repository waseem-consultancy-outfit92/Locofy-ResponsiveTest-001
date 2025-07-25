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

const IgRequiredLicenseDisclosureAndBaringServicesDbsPageData = [
  {
    key: "ig-1",
    link: "/purpose-of-product-certification",
    icon: img1IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/where-to-apply",
    icon: img2IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/eligibility-criteria",
    icon: img3IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/application-process",
    icon: img4IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/required-documents",
    icon: img5IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/cost-breakdown",
    icon: img6IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/timeline-for-certification",
    icon: img7IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/validity-of-the-certificate",
    icon: img8IgRequiredLicenseDisclosureAndBaringServicesDbsImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredLicenseDisclosureAndBaringServicesDbsPage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredLicenseDisclosureAndBaringServicesDbsPageData}
      pageTitle="Disclosure and Baring Services (DBS)"
      backRoute="/ig-required-licenses"
    />
  );
};

export default IgRequiredLicenseDisclosureAndBaringServicesDbsPage;
