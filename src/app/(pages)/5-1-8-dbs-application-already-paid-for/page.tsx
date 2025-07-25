import { 518DbsApplicationAlreadyPaidForImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 518DbsApplicationAlreadyPaidForPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.8 DBS Application already Paid For`}
      src={518DbsApplicationAlreadyPaidForImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 518DbsApplicationAlreadyPaidForPage;
