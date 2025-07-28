import { 336DbsApplicationRequiringPaymentListImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 336DbsApplicationRequiringPaymentListPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.6 DBS Application Requiring Payment List`}
      src={336DbsApplicationRequiringPaymentListImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 336DbsApplicationRequiringPaymentListPage;
