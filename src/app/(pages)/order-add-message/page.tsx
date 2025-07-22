import { OrderAddMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const OrderAddMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Order Add Message `}
      src={OrderAddMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default OrderAddMessagePage;
