import { 338CompletedDbsChecksImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 338CompletedDbsChecksPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.8 Completed DBS Checks`}
      src={338CompletedDbsChecksImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 338CompletedDbsChecksPage;
