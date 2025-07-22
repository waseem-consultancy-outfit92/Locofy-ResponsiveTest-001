import { FirstSentinelIpoHighLevelTimelineImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FirstSentinelIpoHighLevelTimelinePage = () => {
  return (
    <CommonPage
      pageTitle={`IPO High Level Timeline`}
      src={FirstSentinelIpoHighLevelTimelineImage}
      backRoute="/first-sentinel-broker-document-aqse-listing-proposal-overview"
    />
  );
};

export default FirstSentinelIpoHighLevelTimelinePage;
