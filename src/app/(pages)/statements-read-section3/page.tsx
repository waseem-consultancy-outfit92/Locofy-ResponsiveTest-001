import { StatementsReadImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementsReadPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Statements Read`}
      src={StatementsReadImage3}
      backRoute="/statement"
    />
  );
};

export default StatementsReadPage3;
