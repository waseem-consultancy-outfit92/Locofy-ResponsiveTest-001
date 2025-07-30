import { StatementBadRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementBadRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Statement Bad request`}
      src={StatementBadRequestImage}
      backRoute="/statement"
    />
  );
};

export default StatementBadRequestPage;
