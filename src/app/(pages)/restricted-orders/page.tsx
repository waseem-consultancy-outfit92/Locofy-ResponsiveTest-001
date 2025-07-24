import { AquisTradingProtocolAtpSpecificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AquisTradingProtocolAtpSpecificationPage = () => {
  return (
    <CommonPage
      pageTitle={`Restricted Orders`}
      src={AquisTradingProtocolAtpSpecificationImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default AquisTradingProtocolAtpSpecificationPage;
