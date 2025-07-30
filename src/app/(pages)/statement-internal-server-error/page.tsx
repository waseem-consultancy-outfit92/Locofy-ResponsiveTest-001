import { StatementInternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementInternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Statement Internal Server Error`}
      src={StatementInternalServerErrorImage}
      backRoute="/statement"
    />
  );
};

export default StatementInternalServerErrorPage;
