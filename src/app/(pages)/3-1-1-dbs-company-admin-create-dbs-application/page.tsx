import { 311DbsCompanyAdminCreateDbsApplicationImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 311DbsCompanyAdminCreateDbsApplicationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.1.1 DBS Company Admin Create DBS Application`}
      src={311DbsCompanyAdminCreateDbsApplicationImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 311DbsCompanyAdminCreateDbsApplicationPage;
