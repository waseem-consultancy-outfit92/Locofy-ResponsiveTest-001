import { 3325SignatoryReconcileDetailsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 3325SignatoryReconcileDetailsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.3.2.5 Signatory Reconcile Details`}
      src={3325SignatoryReconcileDetailsImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 3325SignatoryReconcileDetailsPage;
