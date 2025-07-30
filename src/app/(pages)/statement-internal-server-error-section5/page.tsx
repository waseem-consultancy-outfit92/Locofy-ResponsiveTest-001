import { StatementInternalServerErrorImage5 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage5 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage5}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage5;
