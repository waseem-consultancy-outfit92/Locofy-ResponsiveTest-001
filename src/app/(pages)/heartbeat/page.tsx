import { TheartbeatImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheartbeatPage = () => {
  return (
    <CommonPage
      pageTitle={`THeartbeat`}
      src={TheartbeatImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default TheartbeatPage;
