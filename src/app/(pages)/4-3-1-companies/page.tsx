import { 431CompaniesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 431CompaniesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.3.1 Companies`}
      src={431CompaniesImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 431CompaniesPage;
