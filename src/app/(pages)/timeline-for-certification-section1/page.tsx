import { TimelineForCertificationImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TimelineForCertificationPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={TimelineForCertificationImage1}
      backRoute="/ig-required-license-fca-financial-conduct-authority"
    />
  );
};

export default TimelineForCertificationPage1;
