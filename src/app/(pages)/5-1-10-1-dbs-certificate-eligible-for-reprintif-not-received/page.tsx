import { 51101DbsCertificateEligibleForReprintIfNotReceivedImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 51101DbsCertificateEligibleForReprintIfNotReceivedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.10.1 DBS Certificate Eligible for reprint(if not received)`}
      src={51101DbsCertificateEligibleForReprintIfNotReceivedImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 51101DbsCertificateEligibleForReprintIfNotReceivedPage;
