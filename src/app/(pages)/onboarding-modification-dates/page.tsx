"use client";
import { MultiPathPage } from "@/components";
import { img1OnboardingModificationDatesImage } from "@/assets";
import React from "react";

const OnboardingModificationDatesPageData = [
  {
    key: "onboarding-1",
    link: "/",
    icon: img1OnboardingModificationDatesImage,
    title: "Last Modification 30 January 2025",
  },
];

const OnboardingModificationDatesPage = () => {
  return (
    <MultiPathPage
      arrayData={OnboardingModificationDatesPageData}
      pageTitle="IG Modification Dates"
      backRoute="/"
    />
  );
};

export default OnboardingModificationDatesPage;
