import { 342AdjustmentImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 342AdjustmentPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.2 Adjustment`}
      src={342AdjustmentImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 342AdjustmentPage;
