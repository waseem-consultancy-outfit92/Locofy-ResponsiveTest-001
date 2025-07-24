import { OrderAddResponseMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderAddResponseMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Add Response Message `}
      src={OrderAddResponseMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderAddResponseMessagePage;
