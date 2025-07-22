import { OrderModifyResponseMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderModifyResponseMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Modify Response Message `}
      src={OrderModifyResponseMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderModifyResponseMessagePage;
