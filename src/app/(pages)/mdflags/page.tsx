import { MdflagsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MdflagsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` MdFlags `}
      src={MdflagsImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default MdflagsPage;
