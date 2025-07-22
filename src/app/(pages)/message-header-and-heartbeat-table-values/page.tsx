import { MessageHeaderAndHeartbeatTableValuesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const MessageHeaderAndHeartbeatTableValuesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Message Header and Heartbeat (Table Values)`}
      src={MessageHeaderAndHeartbeatTableValuesImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default MessageHeaderAndHeartbeatTableValuesPage;
