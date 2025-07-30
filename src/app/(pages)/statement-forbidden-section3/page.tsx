import { StatementForbiddenImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementForbiddenPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Statement Forbidden`}
      src={StatementForbiddenImage3}
      backRoute="/statement"
    />
  );
};

export default StatementForbiddenPage3;
