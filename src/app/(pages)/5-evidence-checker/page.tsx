import { 5EvidenceCheckerImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 5EvidenceCheckerPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5. Evidence Checker`}
      src={5EvidenceCheckerImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 5EvidenceCheckerPage;
