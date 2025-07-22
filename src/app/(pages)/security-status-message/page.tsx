import { SecurityStatusMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SecurityStatusMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Security Status Message `}
      src={SecurityStatusMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default SecurityStatusMessagePage;
