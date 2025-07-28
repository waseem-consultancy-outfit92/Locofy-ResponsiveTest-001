import { 345SpentImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 345SpentPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.5 Spent`}
      src={345SpentImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 345SpentPage;
