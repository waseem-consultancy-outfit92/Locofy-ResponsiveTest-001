import { 36ReportImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 36ReportPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.6 Report`}
      src={36ReportImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 36ReportPage;
