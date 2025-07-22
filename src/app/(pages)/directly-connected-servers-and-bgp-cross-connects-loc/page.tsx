import { DirectlyConnectedServersBGPCrossConnectsLocImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectlyConnectedServersBGPCrossConnectsLocPage = () => {
  return (
    <CommonPage
      pageTitle={`Directly connected servers & BGP Cross Connects loc`}
      src={DirectlyConnectedServersBGPCrossConnectsLocImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default DirectlyConnectedServersBGPCrossConnectsLocPage;
