import { LogoutMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LogoutMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Logout Message `}
      src={LogoutMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default LogoutMessagePage;
