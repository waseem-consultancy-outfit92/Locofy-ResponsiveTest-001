import { StatementsReadImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementsReadPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Statements Read`}
      src={StatementsReadImage2}
      backRoute="/statement"
    />
  );
};

export default StatementsReadPage2;
