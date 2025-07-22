import { TradesBustMessagesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const TradesBustMessagesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Trade Bust Message`}
      src={TradesBustMessagesImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default TradesBustMessagesPage;
