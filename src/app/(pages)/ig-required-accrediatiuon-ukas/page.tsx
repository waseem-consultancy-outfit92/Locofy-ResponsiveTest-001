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
  img8IgRequiredMembershipsCsaCloudSecurityAllianceImage,
} from "@/assets";
import React from "react";

const IgRequiredAccrediatiuonUkasPageData = [
  {
    key: "ig-1",
    link: "/ig-required-accrediatiuon-ukas-purpose-of-product-certification",
    icon: img1IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/ig-required-accrediatiuon-ukas-where-to-apply",
    icon: img2IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/ig-required-accrediatiuon-ukas-eligibility-criteria",
    icon: img3IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/ig-required-accrediatiuon-ukas-application-process",
    icon: img4IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/ig-required-accrediatiuon-ukas-required-documents",
    icon: img5IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/ig-required-accrediatiuon-ukas-cost-breakdown",
    icon: img6IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/ig-required-accrediatiuon-ukas-timeline-for-certification",
    icon: img7IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/ig-required-accrediatiuon-ukas-validity-of-the-certificate",
    icon: img8IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredAccrediatiuonUkasPage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredAccrediatiuonUkasPageData}
      pageTitle="UKAS (United Kingdom Accreditation Service)"
      backRoute="/required-accreditation"
    />
  );
};

export default IgRequiredAccrediatiuonUkasPage;
