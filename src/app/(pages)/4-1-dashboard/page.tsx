import { 41DashboardImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 41DashboardPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.1 Dashboard`}
      src={41DashboardImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 41DashboardPage;
