import { 413DbsAppListImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 413DbsAppListPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.1.3 DBS App List`}
      src={413DbsAppListImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 413DbsAppListPage;
