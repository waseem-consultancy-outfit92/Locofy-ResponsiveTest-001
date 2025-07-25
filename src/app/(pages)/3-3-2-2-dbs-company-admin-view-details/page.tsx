import { 3322DbsCompanyAdminViewDetailsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3322DbsCompanyAdminViewDetailsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.2.2 DBS Company Admin View Details`}
      src={3322DbsCompanyAdminViewDetailsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3322DbsCompanyAdminViewDetailsPage;
