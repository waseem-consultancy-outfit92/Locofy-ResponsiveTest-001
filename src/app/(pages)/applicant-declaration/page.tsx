import { ApplicantDeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicantDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Applicant Declaration`}
      src={ApplicantDeclarationImage}
      backRoute="/member-application-form"
    />
  );
};

export default ApplicantDeclarationPage;
