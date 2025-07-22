import { OrderModifyExtendedMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderModifyExtendedMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Modify Extended Message `}
      src={OrderModifyExtendedMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderModifyExtendedMessagePage;
