import { IgNfcIdentityVerificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgNfcIdentityVerificationPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgNfcIdentityVerificationImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgNfcIdentityVerificationPage;
