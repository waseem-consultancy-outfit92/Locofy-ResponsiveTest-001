import { 42ViewAssignedApplicationsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 42ViewAssignedApplicationsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.2 View Assigned Applications`}
      src={42ViewAssignedApplicationsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 42ViewAssignedApplicationsPage;
