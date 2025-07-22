import { ApplicantInformationSection1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicantInformationSection1Page = () => {
  return (
    <CommonPage
      pageTitle={`Applicant Information (Section 1)`}
      src={ApplicantInformationSection1Image}
      backRoute="/member-application-form"
    />
  );
};

export default ApplicantInformationSection1Page;
