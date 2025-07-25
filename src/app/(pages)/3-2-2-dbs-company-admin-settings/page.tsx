import { 322DbsCompanyAdminSettingsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 322DbsCompanyAdminSettingsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.2.2 DBS Company Admin Settings`}
      src={322DbsCompanyAdminSettingsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 322DbsCompanyAdminSettingsPage;
