import { IgDigitalIdentityVerificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgDigitalIdentityVerificationPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgDigitalIdentityVerificationImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgDigitalIdentityVerificationPage;
