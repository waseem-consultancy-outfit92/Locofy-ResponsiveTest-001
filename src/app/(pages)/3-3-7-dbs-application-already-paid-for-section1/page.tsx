import { 337DbsApplicationAlreadyPaidForImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 337DbsApplicationAlreadyPaidForPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.7 DBS Application Already Paid For`}
      src={337DbsApplicationAlreadyPaidForImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 337DbsApplicationAlreadyPaidForPage;
