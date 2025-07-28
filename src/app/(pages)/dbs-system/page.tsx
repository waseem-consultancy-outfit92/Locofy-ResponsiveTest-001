import { DbsSystemImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DbsSystemPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / DBS System`}
      src={DbsSystemImage}
      backRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default DbsSystemPage;
