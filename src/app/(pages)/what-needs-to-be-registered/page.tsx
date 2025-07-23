import React from "react";
import { additionalFormsForSpecificTypeOfServices, manageConditionsAndNotice, manageRegulatedActivities, overviewOfNonRegulatedActivities, overviewOfRegulatedActivities } from "@/assets";
import { MultiPathPage } from "@/components";

const PaymentServicePageData = [
  {
    key: "e-1",
    link: "/regulated-services",
    icon: overviewOfRegulatedActivities,
    title: "Overview of Regulated Activities",
  },
  {
    key: "e-2",
    link: "/non-regulated-services",
    icon: overviewOfNonRegulatedActivities,
    title: "Overview of Non-Regulated Activities",
  },
  {
    key: "e-3",
    link: "/add-remove-regulated-activities",
    icon: manageRegulatedActivities,
    title: "Manage Regulated Activities",
  },
  {
    key: "e-4",
    link: "/addremove-condition-and-notice-process-flow",
    icon: manageConditionsAndNotice,
    title: "Manage Conditions & Notice",
  },
  {
    key: "e-5",
    link: "/specific-type-of-services",
    icon: additionalFormsForSpecificTypeOfServices,
    title: "Additional Forms for specific type of services",
  },
];

const WhatNeedsToBeRegisteredPage = () => {
  return (
    <MultiPathPage
      backRoute="/scope-of-registration"
      arrayData={PaymentServicePageData}
      pageTitle="What Needs to Be Registered?"
    />
  );
};

export default WhatNeedsToBeRegisteredPage;
