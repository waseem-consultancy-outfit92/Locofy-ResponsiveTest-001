import { StatementForbiddenImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementForbiddenPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Forbidden`}
      src={StatementForbiddenImage2}
      backRoute="/statement"
    />
  );
};

export default StatementForbiddenPage2;
