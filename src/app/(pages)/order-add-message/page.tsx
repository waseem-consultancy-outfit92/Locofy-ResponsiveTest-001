import { OrderAddMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderAddMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Add Message `}
      src={OrderAddMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderAddMessagePage;
