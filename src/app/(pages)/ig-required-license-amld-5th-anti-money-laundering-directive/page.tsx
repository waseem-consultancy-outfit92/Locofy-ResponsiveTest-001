"use client";
import { MultiPathPage } from "@/components";
import {
  img1IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img2IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img3IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img4IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img5IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img6IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img7IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
  img8IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
} from "@/assets";
import React from "react";

const IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectivePageData = [
  {
    key: "ig-1",
    link: "/ig-required-license-data-protection-principles-purpose-of-product-certification",
    icon: img1IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/ig-required-license-data-protection-principles-where-to-apply",
    icon: img2IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/ig-required-license-data-protection-principles-eligibility-criteria",
    icon: img3IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/ig-required-license-data-protection-principles-application-process",
    icon: img4IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/ig-required-license-data-protection-principles-required-documents",
    icon: img5IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/ig-required-license-data-protection-principles-cost-breakdown",
    icon: img6IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/ig-required-license-data-protection-principles-timeline-for-certification",
    icon: img7IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/ig-required-license-data-protection-principles-validity-of-the-certificate",
    icon: img8IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectiveImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectivePage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectivePageData}
      pageTitle="AMLD (5th Anti-Money Laundering Directive)"
      backRoute="/ig-required-licenses"
    />
  );
};

export default IgRequiredLicenseAmld5thAntiMoneyLaunderingDirectivePage;
