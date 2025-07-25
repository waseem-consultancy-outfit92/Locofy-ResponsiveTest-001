import { 3312DbsCompanyAdminHistoryViewImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3312DbsCompanyAdminHistoryViewPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.1.2 DBS Company Admin History View`}
      src={3312DbsCompanyAdminHistoryViewImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3312DbsCompanyAdminHistoryViewPage;
