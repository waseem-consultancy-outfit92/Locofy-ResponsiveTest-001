import { ShortCodeExceptionsReportImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ShortCodeExceptionsReportPage = () => {
  return (
    <CommonPage
      pageTitle={`Short Code Exceptions Report`}
      src={ShortCodeExceptionsReportImage}
      backRoute="/aquis-short-code-upload-specification"
    />
  );
};

export default ShortCodeExceptionsReportPage;
