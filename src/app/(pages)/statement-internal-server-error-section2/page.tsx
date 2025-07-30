import { StatementInternalServerErrorImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage2}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage2;
