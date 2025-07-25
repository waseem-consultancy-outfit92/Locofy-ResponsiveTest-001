import { 421CompaniesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 421CompaniesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.2.1 Companies`}
      src={421CompaniesImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 421CompaniesPage;
