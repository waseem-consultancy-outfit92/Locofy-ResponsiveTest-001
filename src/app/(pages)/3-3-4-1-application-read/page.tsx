import { 3341ApplicationReadImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3341ApplicationReadPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.4.1 Application Read`}
      src={3341ApplicationReadImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3341ApplicationReadPage;
