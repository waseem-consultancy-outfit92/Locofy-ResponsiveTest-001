import { AodUpdateMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AodUpdateMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`AoD Update Message`}
      src={AodUpdateMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default AodUpdateMessagePage;
