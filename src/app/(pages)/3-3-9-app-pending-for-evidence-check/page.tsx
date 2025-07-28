import { 339AppPendingForEvidenceCheckImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 339AppPendingForEvidenceCheckPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.9 App Pending for Evidence Check`}
      src={339AppPendingForEvidenceCheckImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 339AppPendingForEvidenceCheckPage;
