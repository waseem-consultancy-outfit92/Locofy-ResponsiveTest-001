import { 4CounterSignatoryImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 4CounterSignatoryPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4. Counter Signatory`}
      src={4CounterSignatoryImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 4CounterSignatoryPage;
