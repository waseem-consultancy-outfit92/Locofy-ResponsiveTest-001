"use client";
import { MultiPathPage } from "@/components";
import {
  img1IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img2IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img3IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img4IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img5IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img6IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img7IgRequiredMembershipsCsaCloudSecurityAllianceImage,
  img8IgRequiredMembershipsCsaCloudSecurityAllianceImage
} from "@/assets";
import React from "react";

const IgRequiredMembershipsBsiBritishStandardsInstitutionPageData = [
    {
    key: "ig-1",
    link: "/ig-required-memberships-bsi-british-standards-institution-purpose-of-product-certification",
    icon: img1IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/ig-required-memberships-bsi-british-standards-institution-where-to-apply",
    icon: img2IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/ig-required-memberships-bsi-british-standards-institution-eligibility-criteria",
    icon: img3IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/ig-required-memberships-bsi-british-standards-institution-application-process",
    icon: img4IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/ig-required-memberships-bsi-british-standards-institution-required-documents",
    icon: img5IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/ig-required-memberships-bsi-british-standards-institution-cost-breakdown",
    icon: img6IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/ig-required-memberships-bsi-british-standards-institution-timeline-for-certification",
    icon: img7IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/ig-required-memberships-bsi-british-standards-institution-validity-of-the-certificate",
    icon: img8IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Validity of the Certificate",
  }
];

const IgRequiredMembershipsBsiBritishStandardsInstitutionPage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredMembershipsBsiBritishStandardsInstitutionPageData}
      pageTitle="BSI (British Standards Institution)"
      backRoute="/required-memberships"
    />
  );
};

export default IgRequiredMembershipsBsiBritishStandardsInstitutionPage;
