import { StatementInternalServerErrorImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage3}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage3;
