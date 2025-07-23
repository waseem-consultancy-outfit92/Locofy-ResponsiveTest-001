"use client";
import { MultiPathPage } from "@/components";
import {
  need1,
  need2,
  need3,
  need4
} from "@/assets";
import React from "react";

const NewProviderApplicationBreakdownPageData = [
  {
    key: "new-1",
    link: "/new-provider-application-breakdown",
    icon: need1,
    title: "New Provider Application Breakdown",
  },
  {
    key: "new-2",
    link: "/manager-registration",
    icon: need2,
    title: "Manager Application Breakdown",
  },
  {
    key: "new-3",
    link: "/qualifications-skills-experience",
    icon: need3,
    title: "Qualifications & Certifications",
  },
  {
    key: "new-4",
    link: "/supporting-people",
    icon: need4,
    title: "Supports (People/ Building/ Plan)",
  },
];

const WhoNeedsToRegisterPage = () => {
  return (
    <MultiPathPage
      arrayData={NewProviderApplicationBreakdownPageData}
      pageTitle="Who Needs to Register?"
       backRoute="/scope-of-registration"
    />
  );
};

export default WhoNeedsToRegisterPage;
