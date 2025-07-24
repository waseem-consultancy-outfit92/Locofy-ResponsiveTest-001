"use client";
import { MultiPathPage } from "@/components";
import { main1, main2 } from "@/assets";
import React from "react";

const ScopeOfRegistrationPageData = [
  {
    key: "scope-1",
    link: "/pay-day-loan",
    icon: main1,
    title: "Pay Day Loan",
  },
  {
    key: "scope-2",
    link: "/earned-wage-access-ewa",
    icon: main2,
    title: "Who Needs to Register?",
  },
];

const ScopeOfRegistrationPage = () => {
  return (
    <MultiPathPage
      arrayData={ScopeOfRegistrationPageData}
      pageTitle="Pay Day Loan"
    />
  );
};

export default ScopeOfRegistrationPage;
