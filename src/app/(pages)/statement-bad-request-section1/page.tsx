import { StatementBadRequestImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementBadRequestPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Bad request`}
      src={StatementBadRequestImage1}
      backRoute="/statement"
    />
  );
};

export default StatementBadRequestPage1;
