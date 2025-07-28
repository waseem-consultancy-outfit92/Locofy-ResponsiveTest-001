import { 33101ReprintImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 33101ReprintPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.10.1  Reprint`}
      src={33101ReprintImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 33101ReprintPage;
