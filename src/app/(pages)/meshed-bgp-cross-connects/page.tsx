import { MeshedBGPCrossConnectsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MeshedBGPCrossConnectsPage = () => {
  return (
    <CommonPage
      pageTitle={`Meshed BGP Cross Connects`}
      src={MeshedBGPCrossConnectsImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default MeshedBGPCrossConnectsPage;
