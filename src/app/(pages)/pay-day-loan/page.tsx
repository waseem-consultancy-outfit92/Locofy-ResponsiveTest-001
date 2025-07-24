import { PayDayLoanImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const PayDayLoanPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Pay Day Loan`}
      src={PayDayLoanImage}
      backRoute="/"
      amendmentButtonRoute="/pay-day-loan-ac"
    />
  );
};

export default PayDayLoanPage;
