import { ErrorDescriptionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ErrorDescriptionPage = () => {
  return (
    <CommonPage
      pageTitle={`Error Description`}
      src={ErrorDescriptionImage}
      backRoute="/regulatory-transaction-reporting-service-specification"
    />
  );
};

export default ErrorDescriptionPage;
