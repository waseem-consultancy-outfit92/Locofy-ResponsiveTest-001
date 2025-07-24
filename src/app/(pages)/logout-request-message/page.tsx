import { LogoutRequestMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LogoutRequestMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Logout Request Message`}
      src={LogoutRequestMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default LogoutRequestMessagePage;
