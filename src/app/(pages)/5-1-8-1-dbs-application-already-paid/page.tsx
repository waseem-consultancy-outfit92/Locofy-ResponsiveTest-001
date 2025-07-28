import { DbsApplicationAlreadyPaidImage5181 } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import AmendmentComparisonNoBtn from "@/components/amendment-comparison-no-btn";
import React from "react";

const DbsApplicationAlreadyPaidPage5181 = () => {
  return (
    <AmendmentComparisonNoBtn
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.8.1 DBS Application already Paid`}
      src={DbsApplicationAlreadyPaidImage5181}
      backRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default DbsApplicationAlreadyPaidPage5181;
