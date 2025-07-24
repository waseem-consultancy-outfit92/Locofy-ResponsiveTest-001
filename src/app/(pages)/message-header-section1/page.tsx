import { MessageHeaderImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MessageHeaderPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Message Header `}
      src={MessageHeaderImage1}
      backRoute="/drop-copy-specifications"
    />
  );
};

export default MessageHeaderPage1;
