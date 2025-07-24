import { OrderStatusImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderStatusPage = () => {
  return (
    <CommonPage
      pageTitle={`Order Status`}
      src={OrderStatusImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderStatusPage;
