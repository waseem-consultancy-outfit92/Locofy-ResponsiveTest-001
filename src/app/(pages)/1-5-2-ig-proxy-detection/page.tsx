import { IgProxyDetectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgProxyDetectionPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgProxyDetectionImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgProxyDetectionPage;
