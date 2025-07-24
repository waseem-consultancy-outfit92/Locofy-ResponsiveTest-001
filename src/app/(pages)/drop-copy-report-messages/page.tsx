import { DropCopyReportMessagesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DropCopyReportMessagesPage = () => {
  return (
    <CommonPage
      pageTitle={`Drop Copy Report Messages `}
      src={DropCopyReportMessagesImage}
      backRoute="/drop-copy-specifications"
    />
  );
};

export default DropCopyReportMessagesPage;
