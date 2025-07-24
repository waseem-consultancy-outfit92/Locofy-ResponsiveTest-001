import { IoiFirmupImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IoiFirmupPage = () => {
  return (
    <CommonPage
      pageTitle={`IOI Firmup`}
      src={IoiFirmupImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default IoiFirmupPage;
