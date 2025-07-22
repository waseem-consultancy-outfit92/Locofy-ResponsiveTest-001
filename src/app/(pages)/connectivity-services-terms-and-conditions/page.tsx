import { ConnectivityServicesTermsAndConditionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConnectivityServicesTermsAndConditionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Connectivity Services Terms and Conditions`}
      src={ConnectivityServicesTermsAndConditionsImage}
      backRoute="/legal-agreements"
    />
  );
};

export default ConnectivityServicesTermsAndConditionsPage;
