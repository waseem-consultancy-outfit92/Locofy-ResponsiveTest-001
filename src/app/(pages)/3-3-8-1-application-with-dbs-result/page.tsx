import { 3381ApplicationWithDbsResultImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3381ApplicationWithDbsResultPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.8.1 Application with DBS Result`}
      src={3381ApplicationWithDbsResultImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3381ApplicationWithDbsResultPage;
