import { OrderModifyMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderModifyMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Modify Message`}
      src={OrderModifyMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderModifyMessagePage;
