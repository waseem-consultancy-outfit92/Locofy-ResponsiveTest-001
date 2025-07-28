import { 517ApplicationPendingForTheDbsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 517ApplicationPendingForTheDbsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.7 Application Pending for the DBS`}
      src={517ApplicationPendingForTheDbsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 517ApplicationPendingForTheDbsPage;
