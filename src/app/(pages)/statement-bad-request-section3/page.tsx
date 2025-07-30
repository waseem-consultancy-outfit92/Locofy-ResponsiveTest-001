import { StatementBadRequestImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementBadRequestPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Bad request`}
      src={StatementBadRequestImage3}
      backRoute="/statement"
    />
  );
};

export default StatementBadRequestPage3;
