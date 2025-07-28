import { 5181DbsApplicationAlreadyPaidImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 5181DbsApplicationAlreadyPaidPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.8.1 DBS Application already Paid`}
      src={5181DbsApplicationAlreadyPaidImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 5181DbsApplicationAlreadyPaidPage;
