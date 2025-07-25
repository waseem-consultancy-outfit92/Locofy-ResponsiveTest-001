import { 31DbsCompanyAdminDashboardImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 31DbsCompanyAdminDashboardPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.1 DBS Company Admin Dashboard`}
      src={31DbsCompanyAdminDashboardImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 31DbsCompanyAdminDashboardPage;
