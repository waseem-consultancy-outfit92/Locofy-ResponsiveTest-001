import { StatementInternalServerErrorImage10 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage10 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage10}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage10;
