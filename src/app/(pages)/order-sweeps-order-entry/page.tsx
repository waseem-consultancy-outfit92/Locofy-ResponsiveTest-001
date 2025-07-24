import { OrderSweepsOrderEntryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderSweepsOrderEntryPage = () => {
  return (
    <CommonPage
      pageTitle={`Order Sweeps Order Entry`}
      src={OrderSweepsOrderEntryImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderSweepsOrderEntryPage;
