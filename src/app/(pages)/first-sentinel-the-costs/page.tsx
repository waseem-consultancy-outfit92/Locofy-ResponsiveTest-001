import { FirstSentinelTheCostsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FirstSentinelTheCostsPage = () => {
  return (
    <CommonPage
      pageTitle={`The Costs`}
      src={FirstSentinelTheCostsImage}
      backRoute="/first-sentinel-broker-document-aqse-listing-proposal-overview"
    />
  );
};

export default FirstSentinelTheCostsPage;
