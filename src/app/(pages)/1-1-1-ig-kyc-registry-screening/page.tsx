import { IgKycRegistryScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKycRegistryScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKycRegistryScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKycRegistryScreeningPage;
