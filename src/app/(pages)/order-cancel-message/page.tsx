import { OrderCancelMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const OrderCancelMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Order Cancel Message `}
      src={OrderCancelMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default OrderCancelMessagePage;
