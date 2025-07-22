import { BGPCrossConnectsCircuitsDiagramDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BGPCrossConnectsCircuitsDiagramDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`BGP Cross Connects`}
      src={BGPCrossConnectsCircuitsDiagramDetailsImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default BGPCrossConnectsCircuitsDiagramDetailsPage;
