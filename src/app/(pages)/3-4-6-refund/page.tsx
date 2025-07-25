import { 346RefundImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 346RefundPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.6 Refund`}
      src={346RefundImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 346RefundPage;
