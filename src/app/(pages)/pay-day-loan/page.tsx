import { EarnedWageAccessEwaImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const PayDayage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Payday Loans`}
      src={EarnedWageAccessEwaImage}
      backRoute="/"
      amendmentButtonRoute="/pay-day-loan-ac"
    />
  );
};

export default PayDayage;
