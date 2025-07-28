import { 525ApplicationPendingEvidenceCheckerImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 525ApplicationPendingEvidenceCheckerPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.2.5 Application Pending Evidence Checker`}
      src={525ApplicationPendingEvidenceCheckerImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 525ApplicationPendingEvidenceCheckerPage;
