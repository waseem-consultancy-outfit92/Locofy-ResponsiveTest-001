import { FastTrackImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FastTrackPage = () => {
  return (
    <CommonPage
      pageTitle={`Fast-Track`}
      src={FastTrackImage}
      backRoute="/access-rulebook"
    />
  );
};

export default FastTrackPage;
