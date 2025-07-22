import { MmtFlagsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MmtFlagsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` MMT Flags`}
      src={MmtFlagsImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default MmtFlagsPage;
