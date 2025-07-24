import { OrderCancelResponseMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderCancelResponseMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Cancel Response Message `}
      src={OrderCancelResponseMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderCancelResponseMessagePage;
