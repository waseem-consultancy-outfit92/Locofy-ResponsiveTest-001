import { 33102ViewApplicationDetailsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 33102ViewApplicationDetailsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.10.2 View Application Details`}
      src={33102ViewApplicationDetailsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 33102ViewApplicationDetailsPage;
