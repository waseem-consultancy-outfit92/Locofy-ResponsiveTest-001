import { 3332DbsApplicationDetailsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3332DbsApplicationDetailsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.3.2 DBS Application Details`}
      src={3332DbsApplicationDetailsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3332DbsApplicationDetailsPage;
