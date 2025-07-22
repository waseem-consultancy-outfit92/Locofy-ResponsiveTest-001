import { DirectlyConnectedServersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectlyConnectedServersPage = () => {
  return (
    <CommonPage
      pageTitle={`Directly connected servers`}
      src={DirectlyConnectedServersImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default DirectlyConnectedServersPage;
