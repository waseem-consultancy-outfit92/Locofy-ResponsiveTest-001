import { 312DbsCompanyAdminPendingApplicationEvidenceCheckImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 312DbsCompanyAdminPendingApplicationEvidenceCheckPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.1.2 DBS Company Admin Pending Application Evidence Check`}
      src={312DbsCompanyAdminPendingApplicationEvidenceCheckImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 312DbsCompanyAdminPendingApplicationEvidenceCheckPage;
