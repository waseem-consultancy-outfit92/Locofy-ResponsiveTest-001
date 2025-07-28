import { 511AssignedApplicantsForDbsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 511AssignedApplicantsForDbsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.1 Assigned Applicants for DBS`}
      src={511AssignedApplicantsForDbsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 511AssignedApplicantsForDbsPage;
