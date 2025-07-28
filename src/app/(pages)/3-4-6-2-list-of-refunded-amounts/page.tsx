import { 3462ListOfRefundedAmountsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3462ListOfRefundedAmountsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.6.2 List of Refunded Amounts`}
      src={3462ListOfRefundedAmountsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3462ListOfRefundedAmountsPage;
