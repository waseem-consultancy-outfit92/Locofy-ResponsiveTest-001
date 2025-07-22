import { RegulatoryTransactionReportingServiceSpecificationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const RegulatoryTransactionReportingServiceSpecificationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Regulatory Transaction Reporting Service Specification`}
      src={RegulatoryTransactionReportingServiceSpecificationImage}
      backRoute="/"
      // amendmentButtonRoute="/rules-and-fees"
    />
  );
};

export default RegulatoryTransactionReportingServiceSpecificationPage;
