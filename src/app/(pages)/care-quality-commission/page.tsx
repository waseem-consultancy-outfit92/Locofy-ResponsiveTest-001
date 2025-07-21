"use client";
import { MultiPathPage } from "@/components";
import {
  img1CareQualityCommissionImage,
  img2CareQualityCommissionImage,
  img3CareQualityCommissionImage,
  img4CareQualityCommissionImage,
  img5CareQualityCommissionImage,
  img6CareQualityCommissionImage,
  img7CareQualityCommissionImage,
  img8CareQualityCommissionImage
} from "@/assets";
import React from "react";

const CareQualityCommissionPageData = [
  {
    key: "care-1",
    link: "/care-quality-commission-cqc-overview",
    icon: img1CareQualityCommissionImage,
    title: "Care Quality Commission (CQC) Overview",
  },
  {
    key: "care-2",
    link: "/scope-of-registration",
    icon: img2CareQualityCommissionImage,
    title: "Scope of Registration (CQC)",
  },
  {
    key: "care-3",
    link: "/withdrawal-of-application",
    icon: img3CareQualityCommissionImage,
    title: "Withdrawal of Application",
  },
  {
    key: "care-4",
    link: "/cqc-glossary",
    icon: img4CareQualityCommissionImage,
    title: "CQC Glossary",
  },
  {
    key: "care-5",
    link: "/cqc-fundamental-standards",
    icon: img5CareQualityCommissionImage,
    title: "CQC Fundamental Standards",
  },
  {
    key: "care-6",
    link: "/cross-sector-inspections",
    icon: img6CareQualityCommissionImage,
    title: "Cross-Sector Inspections",
  },
  {
    key: "care-7",
    link: "/care-quality-commission-regulated-services-14",
    icon: img7CareQualityCommissionImage,
    title: "Regulated Activities",
  },
  {
    key: "care-8",
    link: "/cqc-fee-structure",
    icon: img8CareQualityCommissionImage,
    title: "Fee Structure",
  }
];

const CareQualityCommissionPage = () => {
  return (
    <MultiPathPage
      arrayData={CareQualityCommissionPageData}
      pageTitle=" Care Quality Commission"
      backRoute="/"
    />
  );
};

export default CareQualityCommissionPage;
