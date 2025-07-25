import { 334RejectedDbsApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 334RejectedDbsApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.4 Rejected DBS Application`}
      src={334RejectedDbsApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 334RejectedDbsApplicationPage;
