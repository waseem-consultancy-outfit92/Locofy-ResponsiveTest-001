import { IoiInviteMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IoiInviteMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`IOI Invite Message `}
      src={IoiInviteMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default IoiInviteMessagePage;
