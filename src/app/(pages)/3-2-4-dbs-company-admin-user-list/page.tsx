import { 324DbsCompanyAdminUserListImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 324DbsCompanyAdminUserListPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.2.4 DBS Company Admin User List`}
      src={324DbsCompanyAdminUserListImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 324DbsCompanyAdminUserListPage;
