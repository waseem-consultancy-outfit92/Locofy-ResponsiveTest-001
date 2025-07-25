import { 5261ApplicationWithDbsResultImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 5261ApplicationWithDbsResultPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.2.6.1 Application with DBS Result`}
      src={5261ApplicationWithDbsResultImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 5261ApplicationWithDbsResultPage;
