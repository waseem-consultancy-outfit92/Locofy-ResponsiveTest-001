"use client";
import { MultiPathPage } from "@/components";
import {
  img1WhoNeedsToRegisterImage,
  img2WhoNeedsToRegisterImage,
  img3WhoNeedsToRegisterImage,
  img4WhoNeedsToRegisterImage
} from "@/assets";
import React from "react";

const WhoNeedsToRegisterPageData = [
  {
    key: "who-1",
    link: "/new-provider-application-breakdown",
    icon: img1WhoNeedsToRegisterImage,
    title: "New Provider Application Breakdown",
  },
  {
    key: "who-2",
    link: "/manager-registration",
    icon: img2WhoNeedsToRegisterImage,
    title: "Manager Application Breakdown",
  },
  {
    key: "who-3",
    link: "/qualifications-skills-experience",
    icon: img3WhoNeedsToRegisterImage,
    title: "Qualifications & Certifications",
  },
  {
    key: "who-4",
    link: "/supporting-people",
    icon: img4WhoNeedsToRegisterImage,
    title: "Supports (People/ Building/ Plan)",
  }
];

const WhoNeedsToRegisterPage = () => {
  return (
    <MultiPathPage
      arrayData={WhoNeedsToRegisterPageData}
      pageTitle="Who Needs to Register?"
      backRoute="/scope-of-registration"
    />
  );
};

export default WhoNeedsToRegisterPage;
