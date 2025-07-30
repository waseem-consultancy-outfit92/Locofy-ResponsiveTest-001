import { StatementInternalServerErrorImage8 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage8 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage8}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage8;
