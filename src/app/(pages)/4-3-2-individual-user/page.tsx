import { 432IndividualUserImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 432IndividualUserPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 4.3.2  Individual User`}
      src={432IndividualUserImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 432IndividualUserPage;
