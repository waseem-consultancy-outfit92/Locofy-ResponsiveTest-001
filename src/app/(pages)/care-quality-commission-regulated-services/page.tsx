"use client";
import { MultiPathPage } from "@/components";
import {
  img1CareQualityCommissionRegulatedServices14Image,
  img2CareQualityCommissionRegulatedServices14Image,
  img3CareQualityCommissionRegulatedServices14Image,
  img4CareQualityCommissionRegulatedServices14Image,
  img5CareQualityCommissionRegulatedServices14Image,
  img6CareQualityCommissionRegulatedServices14Image,
  img7CareQualityCommissionRegulatedServices14Image,
  img8CareQualityCommissionRegulatedServices14Image,
  img9CareQualityCommissionRegulatedServices14Image,
  img10CareQualityCommissionRegulatedServices14Image,
  img11CareQualityCommissionRegulatedServices14Image,
  img12CareQualityCommissionRegulatedServices14Image,
  img13CareQualityCommissionRegulatedServices14Image,
  img14CareQualityCommissionRegulatedServices14Image
} from "@/assets";
import React from "react";

const CareQualityCommissionRegulatedServices14PageData = [
  {
    key: "care-1",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img1CareQualityCommissionRegulatedServices14Image,
    title: "Personal Care",
  },
  {
    key: "care-2",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img2CareQualityCommissionRegulatedServices14Image,
    title: "Accommodation for Persons Requiring Nursing or Personal Care",
  },
  {
    key: "care-3",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img3CareQualityCommissionRegulatedServices14Image,
    title: "Treatment of Disease, Disorder, or Injury",
  },
  {
    key: "care-4",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img4CareQualityCommissionRegulatedServices14Image,
    title: "Surgical Procedures",
  },
  {
    key: "care-5",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img5CareQualityCommissionRegulatedServices14Image,
    title: "Diagnostic and Screening Procedures",
  },
  {
    key: "care-6",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img6CareQualityCommissionRegulatedServices14Image,
    title: "Maternity and Midwifery Services",
  },
  {
    key: "care-7",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img7CareQualityCommissionRegulatedServices14Image,
    title: "Termination of Pregnancies",
  },
  {
    key: "care-8",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img8CareQualityCommissionRegulatedServices14Image,
    title: "Family Planning Services",
  },
  {
    key: "care-9",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img9CareQualityCommissionRegulatedServices14Image,
    title: "Accommodation for Substance Misuse Treatment",
  },
  {
    key: "care-10",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img10CareQualityCommissionRegulatedServices14Image,
    title: "Transport Services, Triage, and Remote Medical Advice",
  },
  {
    key: "care-11",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img11CareQualityCommissionRegulatedServices14Image,
    title: "Nursing Care",
  },
  {
    key: "care-12",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img12CareQualityCommissionRegulatedServices14Image,
    title: "Management of Blood Supply and Products",
  },
  {
    key: "care-13",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img13CareQualityCommissionRegulatedServices14Image,
    title: "Assessment or Medical Treatment for Persons Detained Under the Mental Health Act",
  },
  {
    key: "care-14",
    link: "/application-process-for-personal-care-cqc-regulated-activity",
    icon: img14CareQualityCommissionRegulatedServices14Image,
    title: "Services in Slimming Clinics",
  }
];

const CareQualityCommissionRegulatedServices14Page = () => {
  return (
    <MultiPathPage
      arrayData={CareQualityCommissionRegulatedServices14PageData}
      pageTitle="Care Quality Commission > Regulated services 14"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default CareQualityCommissionRegulatedServices14Page;
