import { 333IncompleteDbsApplicationsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 333IncompleteDbsApplicationsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.3 Incomplete DBS Applications`}
      src={333IncompleteDbsApplicationsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 333IncompleteDbsApplicationsPage;
