import { 347UserSpentImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 347UserSpentPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.7 User Spent`}
      src={347UserSpentImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 347UserSpentPage;
