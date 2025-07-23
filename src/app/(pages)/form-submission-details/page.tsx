import { FormSubmissionDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormSubmissionDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Form Submission Details`}
      src={FormSubmissionDetailsImage}
      backRoute="/requested-markets-amendment-form"
    />
  );
};

export default FormSubmissionDetailsPage;
