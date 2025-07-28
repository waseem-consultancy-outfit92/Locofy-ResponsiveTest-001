import { 1DbsAuthorisedUserImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 1DbsAuthorisedUserPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 1 DBS Authorised User`}
      src={1DbsAuthorisedUserImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 1DbsAuthorisedUserPage;
