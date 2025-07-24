import { EarnedWageAccessEwaImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const EarnedWageAccessEwaPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Earned Wage Access (EWA)`}
      src={EarnedWageAccessEwaImage}
      backRoute="/"
      amendmentButtonRoute="/earned-wage-access-ewa-ac"
    />
  );
};

export default EarnedWageAccessEwaPage;
