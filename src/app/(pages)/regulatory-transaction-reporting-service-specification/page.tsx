import { RegulatoryTransactionReportingServiceSpecificationImage } from "@/assets";
import { CommonPage } from "@/components";
import { AqseOverviewSection } from "@/features/aqse-overview-section";
import { RegulatoryTranscation } from "@/features/regulatory-transcation";
import React from "react";

const RegulatoryTransactionReportingServiceSpecificationPage = () => {
  return (
    // <CommonPage
    //   pageTitle={`Regulatory Transaction Reporting Service Specification`}
    //   src={RegulatoryTransactionReportingServiceSpecificationImage}
    //   backRoute="/market-data"
    // />
    <RegulatoryTranscation />
  );
};

export default RegulatoryTransactionReportingServiceSpecificationPage;
