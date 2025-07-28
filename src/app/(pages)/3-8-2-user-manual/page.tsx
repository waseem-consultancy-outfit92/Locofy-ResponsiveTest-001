import { 382UserManualImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 382UserManualPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.8.2 User Manual`}
      src={382UserManualImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 382UserManualPage;
