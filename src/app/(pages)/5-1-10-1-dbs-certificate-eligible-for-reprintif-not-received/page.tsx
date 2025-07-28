import { DbsCertificateEligibleForReprintIfNotReceivedImage51101 } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import AmendmentComparisonNoBtn from "@/components/amendment-comparison-no-btn";
import React from "react";

const DbsCertificateEligibleForReprintIfNotReceivedPage51101 = () => {
  return (
    <AmendmentComparisonNoBtn
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 5.1.10.1 DBS Certificate Eligible for reprint(if not received)`}
      src={DbsCertificateEligibleForReprintIfNotReceivedImage51101}
      backRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default DbsCertificateEligibleForReprintIfNotReceivedPage51101;
