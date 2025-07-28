import { 343TransactionImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 343TransactionPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.3 Transaction`}
      src={343TransactionImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 343TransactionPage;
