import { ConnectivityServicesRequiredImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectivityServicesRequiredPage = () => {
  return (
    <CommonPage
      pageTitle={`Connectivity Services Required`}
      src={ConnectivityServicesRequiredImage}
      backRoute="/software-vendor-application-form"
    />
  );
};

export default ConnectivityServicesRequiredPage;
