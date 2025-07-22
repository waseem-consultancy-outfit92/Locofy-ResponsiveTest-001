import { EligibilityForAdmissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EligibilityForAdmissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Eligibility For Admission`}
      src={EligibilityForAdmissionImage}
      backRoute="/access-rulebook"
    />
  );
};

export default EligibilityForAdmissionPage;
