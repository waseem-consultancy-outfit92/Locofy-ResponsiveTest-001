"use client";
import { MultiPathPage } from "@/components";
import {
  img1IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img2IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img3IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img4IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img5IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img6IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img7IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
  img8IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
} from "@/assets";
import React from "react";

const IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemPageData = [
  {
    key: "ig-1",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-purpose-of-product-certification  ",
    icon: img1IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Purpose of Product Certification",
  },
  {
    key: "ig-2",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-where-to-apply  ",
    icon: img2IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Where to Apply",
  },
  {
    key: "ig-3",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-eligibility-criteria  ",
    icon: img3IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Eligibility Criteria",
  },
  {
    key: "ig-4",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-application-process  ",
    icon: img4IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Application Process",
  },
  {
    key: "ig-5",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-required-documents  ",
    icon: img5IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Required Documents",
  },
  {
    key: "ig-6",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-cost-breakdown  ",
    icon: img6IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Cost Breakdown",
  },
  {
    key: "ig-7",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-timeline-for-certification   ",
    icon: img7IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Timeline for Certification",
  },
  {
    key: "ig-8",
    link: "/ig-required-affiliation-fatf-financial-action-task-force-validity-of-the-certificate  ",
    icon: img8IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    title: "Validity of the Certificate",
  },
];

const IgRequiredAffiliationFatfFinancialActionTaskForce = () => {
  return (
    <MultiPathPage
      arrayData={
        IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemPageData
      }
      pageTitle="FATF (Financial Action Task Force)"
      backRoute="/ig-required-affiliation"
    />
  );
};

export default IgRequiredAffiliationFatfFinancialActionTaskForce;
