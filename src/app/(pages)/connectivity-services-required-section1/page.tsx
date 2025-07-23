import { ConnectivityServicesRequiredImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectivityServicesRequiredPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Connectivity Services Required`}
      src={ConnectivityServicesRequiredImage1}
      backRoute="/connectivity-order-form"
    />
  );
};

export default ConnectivityServicesRequiredPage1;
