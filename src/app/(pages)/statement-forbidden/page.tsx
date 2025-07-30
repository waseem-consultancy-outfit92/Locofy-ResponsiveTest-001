import { StatementForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Statement Forbidden`}
      src={StatementForbiddenImage}
      backRoute="/statement"
    />
  );
};

export default StatementForbiddenPage;
