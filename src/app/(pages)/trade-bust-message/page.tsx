import { TradeBustMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const TradeBustMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Trade Bust Message`}
      src={TradeBustMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default TradeBustMessagePage;
