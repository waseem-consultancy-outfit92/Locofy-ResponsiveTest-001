import { TradeMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const TradeMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Trade Message `}
      src={TradeMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default TradeMessagePage;
