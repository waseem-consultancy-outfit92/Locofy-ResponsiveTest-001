import { 3311DbsCompanyAdminViewApplicationDetailsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3311DbsCompanyAdminViewApplicationDetailsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.1.1 DBS Company Admin View Application Details`}
      src={3311DbsCompanyAdminViewApplicationDetailsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3311DbsCompanyAdminViewApplicationDetailsPage;
