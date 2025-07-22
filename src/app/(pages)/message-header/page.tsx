import { MessageHeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MessageHeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`Message Header`}
      src={MessageHeaderImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default MessageHeaderPage;
