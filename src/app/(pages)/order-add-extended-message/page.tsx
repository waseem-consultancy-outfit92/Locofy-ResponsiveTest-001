import { OrderAddExtendedMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OrderAddExtendedMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Order Add Extended Message`}
      src={OrderAddExtendedMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default OrderAddExtendedMessagePage;
