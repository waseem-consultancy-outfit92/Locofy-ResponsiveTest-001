import { StatementInternalServerErrorImage6 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage6 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage6}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage6;
