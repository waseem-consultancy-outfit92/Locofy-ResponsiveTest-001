import { IcebergOrderRefreshMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IcebergOrderRefreshMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Iceberg Order Refresh Message`}
      src={IcebergOrderRefreshMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default IcebergOrderRefreshMessagePage;
