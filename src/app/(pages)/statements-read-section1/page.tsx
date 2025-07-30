import { StatementsReadImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementsReadPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Statements Read`}
      src={StatementsReadImage1}
      backRoute="/statement"
    />
  );
};

export default StatementsReadPage1;
