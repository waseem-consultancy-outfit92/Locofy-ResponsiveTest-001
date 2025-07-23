import { WarningNoticeRepresentationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WarningNoticeRepresentationPage = () => {
  return (
    <CommonPage
      pageTitle={`Warning Notice Representation`}
      src={WarningNoticeRepresentationImage}
      backRoute="/add-remove-condition-and-notice-process-flow"
    />
  );
};

export default WarningNoticeRepresentationPage;
