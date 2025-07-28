import { 422IndividualUserImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 422IndividualUserPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.2.2 Individual User`}
      src={422IndividualUserImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 422IndividualUserPage;
