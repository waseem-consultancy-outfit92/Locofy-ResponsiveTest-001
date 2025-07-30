import { StatementInternalServerErrorImage4 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage4 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage4}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage4;
