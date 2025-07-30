import { StatementsReadImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementsReadPage = () => {
  return (
    <CommonPage
      pageTitle={`Statements Read`}
      src={StatementsReadImage}
      backRoute="/statement"
    />
  );
};

export default StatementsReadPage;
