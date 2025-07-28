import { 5110DbsCertificateEligibleForReprintIfNotReceivedImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 5110DbsCertificateEligibleForReprintIfNotReceivedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.10 DBS Certificate Eligible for reprint(if not received)`}
      src={5110DbsCertificateEligibleForReprintIfNotReceivedImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 5110DbsCertificateEligibleForReprintIfNotReceivedPage;
