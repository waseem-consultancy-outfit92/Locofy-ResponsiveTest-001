import { MacUpdateMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MacUpdateMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`MaC Update Message `}
      src={MacUpdateMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default MacUpdateMessagePage;
