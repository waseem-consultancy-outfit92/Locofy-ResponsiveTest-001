import { 3323CheckDbsApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3323CheckDbsApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.2.3 Check DBS Application`}
      src={3323CheckDbsApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3323CheckDbsApplicationPage;
