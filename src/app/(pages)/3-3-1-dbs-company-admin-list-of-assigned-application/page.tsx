import { 331DbsCompanyAdminListOfAssignedApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 331DbsCompanyAdminListOfAssignedApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.1 DBS Company Admin List of Assigned Application`}
      src={331DbsCompanyAdminListOfAssignedApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 331DbsCompanyAdminListOfAssignedApplicationPage;
