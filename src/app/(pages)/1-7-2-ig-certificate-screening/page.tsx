import { IgCertificateScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgCertificateScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgCertificateScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgCertificateScreeningPage;
