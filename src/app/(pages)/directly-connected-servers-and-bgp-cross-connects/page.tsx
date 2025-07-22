import { DirectlyConnectedServersAndBGPCrossConnectsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectlyConnectedServersAndBGPCrossConnectsPage = () => {
  return (
    <CommonPage
      pageTitle={`Directly connected servers & BGP Cross Connects`}
      src={DirectlyConnectedServersAndBGPCrossConnectsImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default DirectlyConnectedServersAndBGPCrossConnectsPage;
