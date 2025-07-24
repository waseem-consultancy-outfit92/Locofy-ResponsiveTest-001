import { IgDebtTrackingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgDebtTrackingPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgDebtTrackingImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgDebtTrackingPage;
