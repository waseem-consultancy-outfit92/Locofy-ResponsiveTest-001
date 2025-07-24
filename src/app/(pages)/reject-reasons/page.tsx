import { RejectReasonsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RejectReasonsPage = () => {
  return (
    <CommonPage
      pageTitle={`Reject Reasons`}
      src={RejectReasonsImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default RejectReasonsPage;
