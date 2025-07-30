import { StatementInternalServerErrorImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage1}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage1;
