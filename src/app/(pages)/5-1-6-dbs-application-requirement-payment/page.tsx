import { 516DbsApplicationRequirementPaymentImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 516DbsApplicationRequirementPaymentPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.6 DBS Application requirement payment`}
      src={516DbsApplicationRequirementPaymentImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 516DbsApplicationRequirementPaymentPage;
