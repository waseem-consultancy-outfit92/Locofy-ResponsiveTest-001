"use client";
import { MultiPathPage } from "@/components";
import { img1IgRequiredMembershipsCsaCloudSecurityAllianceImage, img2IgRequiredMembershipsCsaCloudSecurityAllianceImage, img3IgRequiredMembershipsCsaCloudSecurityAllianceImage, img4IgRequiredMembershipsCsaCloudSecurityAllianceImage, img5IgRequiredMembershipsCsaCloudSecurityAllianceImage, img6IgRequiredMembershipsCsaCloudSecurityAllianceImage, img7IgRequiredMembershipsCsaCloudSecurityAllianceImage, img8IgRequiredMembershipsCsaCloudSecurityAllianceImage } from "@/assets";
import React from "react";

const IgRequiredMembershipsUkFinancePageData = [
  {
    key: "ig-1",
    link: "/",
    icon: img1IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/",
    icon: img2IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/",
    icon: img3IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/",
    icon: img4IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/",
    icon: img5IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/",
    icon: img6IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/",
    icon: img7IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/",
    icon: img8IgRequiredMembershipsCsaCloudSecurityAllianceImage,
    title: "Validity of the Certificate",
  }
];

const IgRequiredMembershipsUkFinancePage = () => {
  return (
    <MultiPathPage
      arrayData={IgRequiredMembershipsUkFinancePageData}
      pageTitle="UK Finance"
      backRoute="/required-memberships"
    />
  );
};

export default IgRequiredMembershipsUkFinancePage;
