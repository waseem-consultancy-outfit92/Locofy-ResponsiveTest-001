import React from "react";
import { ApplicationPendingForDbsImage523 } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import AmendmentComparisonNoBtn from "@/components/amendment-comparison-no-btn";

const ApplicationPendingForDbsPage523 = () => {
  return (
    <AmendmentComparisonNoBtn
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.2.3 Application Pending for DBS`}
      src={ApplicationPendingForDbsImage523}
      backRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default ApplicationPendingForDbsPage523;
