import { MacBookEntryMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MacBookEntryMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` MaC Book Entry Message`}
      src={MacBookEntryMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default MacBookEntryMessagePage;
