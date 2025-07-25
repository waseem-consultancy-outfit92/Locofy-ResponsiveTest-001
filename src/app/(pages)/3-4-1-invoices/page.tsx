import { 341InvoicesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const 341InvoicesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part V / 3.4.1 Invoices`}
      src={341InvoicesImage}
      backRoute="/"
      amendmentButtonRoute="/ig-product-diagramrelease-1-chekc-my-dbs"
    />
  );
};

export default 341InvoicesPage;
