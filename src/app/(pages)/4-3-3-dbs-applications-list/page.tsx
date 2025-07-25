import { 433DbsApplicationsListImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 433DbsApplicationsListPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.3.3  DBS Applications List`}
      src={433DbsApplicationsListImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 433DbsApplicationsListPage;
