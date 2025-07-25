import { TimelineForCertificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TimelineForCertificationPage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={TimelineForCertificationImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default TimelineForCertificationPage;
