import { 3331RejectDbsApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3331RejectDbsApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.3.1 Reject DBS Application`}
      src={3331RejectDbsApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3331RejectDbsApplicationPage;
