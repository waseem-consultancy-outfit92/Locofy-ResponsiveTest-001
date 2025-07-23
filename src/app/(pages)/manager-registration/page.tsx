"use client";
import { MultiPathPage } from "@/components";
import {
  img1ManagerRegistrationImage,
  img2ManagerRegistrationImage
} from "@/assets";
import React from "react";

const ManagerRegistrationPageData = [
  {
    key: "manager-1",
    link: "/application-for-registration-as-a-manager-of-regulated-activityactivities",
    icon: img1ManagerRegistrationImage,
    title: "Application for registration as a manager of regulated activity/activities",
  },
  {
    key: "manager-2",
    link: "/application-to-continue-registration-as-a-manager-under-a-new-provide",
    icon: img2ManagerRegistrationImage,
    title: "Application to continue registration as a manager under a new provide",
  }
];

const ManagerRegistrationPage = () => {
  return (
    <MultiPathPage
      arrayData={ManagerRegistrationPageData}
      pageTitle=" Manager Registration"
      backRoute="/who-needs-to-register"
    />
  );
};

export default ManagerRegistrationPage;
