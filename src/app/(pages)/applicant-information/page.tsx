import { ApplicantInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicantInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Applicant Information`}
      src={ApplicantInformationImage}
      backRoute="/mac-order-form"
    />
  );
};

export default ApplicantInformationPage;
