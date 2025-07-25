import { 335ApplicationPendingForTheDbsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 335ApplicationPendingForTheDbsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.5 Application Pending for the DBS`}
      src={335ApplicationPendingForTheDbsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 335ApplicationPendingForTheDbsPage;
