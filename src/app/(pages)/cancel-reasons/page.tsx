import { CancelReasonsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CancelReasonsPage = () => {
  return (
    <CommonPage
      pageTitle={`Cancel Reasons `}
      src={CancelReasonsImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default CancelReasonsPage;
