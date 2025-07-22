import { ConnectivityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectivityPage = () => {
  return (
    <CommonPage
      pageTitle={`CONNECTIVITY`}
      src={ConnectivityImage}
      backRoute="/aquis-exchange-fee-schedule"
    />
  );
};

export default ConnectivityPage;
