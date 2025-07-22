import { DirectlyAttachedServersLayer2CrossConnectImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectlyAttachedServersLayer2CrossConnectPage = () => {
  return (
    <CommonPage
      pageTitle={`Directly Attached Servers Layer-2 Cross Connect`}
      src={DirectlyAttachedServersLayer2CrossConnectImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default DirectlyAttachedServersLayer2CrossConnectPage;
