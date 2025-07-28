import { 38SupportImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 38SupportPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.8 Support`}
      src={38SupportImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 38SupportPage;
