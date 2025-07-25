import { 3310DbsCertificateEligibleForReprintImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3310DbsCertificateEligibleForReprintPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.10 DBS Certificate Eligible for Reprint`}
      src={3310DbsCertificateEligibleForReprintImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3310DbsCertificateEligibleForReprintPage;
