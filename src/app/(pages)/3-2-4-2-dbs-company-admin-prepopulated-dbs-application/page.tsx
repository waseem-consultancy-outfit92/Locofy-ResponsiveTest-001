import { 3242DbsCompanyAdminPrepopulatedDbsApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3242DbsCompanyAdminPrepopulatedDbsApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.2.4.2 DBS Company Admin Prepopulated DBS application`}
      src={3242DbsCompanyAdminPrepopulatedDbsApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3242DbsCompanyAdminPrepopulatedDbsApplicationPage;
