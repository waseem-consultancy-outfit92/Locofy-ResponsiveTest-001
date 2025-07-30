import { StatementBadRequestImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementBadRequestPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Bad request`}
      src={StatementBadRequestImage2}
      backRoute="/statement"
    />
  );
};

export default StatementBadRequestPage2;
