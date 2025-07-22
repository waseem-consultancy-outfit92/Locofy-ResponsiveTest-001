import { TickTableDataMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const TickTableDataMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Tick Table Data Message`}
      src={TickTableDataMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default TickTableDataMessagePage;
