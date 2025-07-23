import { ConnectivityContactInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectivityContactInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Connectivity Contact Information`}
      src={ConnectivityContactInformationImage}
      backRoute="/connectivity-order-form"
    />
  );
};

export default ConnectivityContactInformationPage;
