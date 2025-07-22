import { FirstSentinelMarketComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FirstSentinelMarketComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Market Comparison`}
      src={FirstSentinelMarketComparisonImage}
      backRoute="/first-sentinel-broker-document-aqse-listing-proposal-overview"
    />
  );
};

export default FirstSentinelMarketComparisonPage;
