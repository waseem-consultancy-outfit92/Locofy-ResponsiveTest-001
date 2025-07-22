import { OrderCancelMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderCancelMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Cancel Message`}
      src={OrderCancelMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderCancelMessagePage;
