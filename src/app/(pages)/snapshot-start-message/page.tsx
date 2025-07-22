import { SnapshotStartMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SnapshotStartMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Snapshot Start Message`}
      src={SnapshotStartMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default SnapshotStartMessagePage;
