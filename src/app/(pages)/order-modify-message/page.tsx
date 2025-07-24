import {  OrderModifyMessageImage1 } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const OrderModifyMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Order Modify Message `}
      src={OrderModifyMessageImage1}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default OrderModifyMessagePage;
