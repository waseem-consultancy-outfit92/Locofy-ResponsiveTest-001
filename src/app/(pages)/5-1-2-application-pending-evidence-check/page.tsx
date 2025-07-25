import { 512ApplicationPendingEvidenceCheckImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 512ApplicationPendingEvidenceCheckPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.2 Application Pending Evidence Check`}
      src={512ApplicationPendingEvidenceCheckImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 512ApplicationPendingEvidenceCheckPage;
