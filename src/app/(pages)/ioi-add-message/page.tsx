import { IoiAddMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IoiAddMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`IOI Add Message `}
      src={IoiAddMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default IoiAddMessagePage;
