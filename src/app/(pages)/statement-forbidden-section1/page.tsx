import { StatementForbiddenImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementForbiddenPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Forbidden`}
      src={StatementForbiddenImage1}
      backRoute="/statement"
    />
  );
};

export default StatementForbiddenPage1;
