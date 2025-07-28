import { 51DashboardImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 51DashboardPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1 Dashboard`}
      src={51DashboardImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 51DashboardPage;
