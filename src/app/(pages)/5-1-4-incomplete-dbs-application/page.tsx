import { IncompleteDbsApplicationImage514 } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import AmendmentComparisonNoBtn from "@/components/amendment-comparison-no-btn";
import React from "react";

const IncompleteDbsApplicationPage514 = () => {
  return (
    <AmendmentComparisonNoBtn
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.4 Incomplete DBS Application`}
      src={IncompleteDbsApplicationImage514}
      backRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default IncompleteDbsApplicationPage514;
