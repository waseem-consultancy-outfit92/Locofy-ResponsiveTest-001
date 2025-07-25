import { 411DbsApplicationToBeReviewedImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 411DbsApplicationToBeReviewedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.1.1 DBS Application To Be Reviewed`}
      src={411DbsApplicationToBeReviewedImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 411DbsApplicationToBeReviewedPage;
