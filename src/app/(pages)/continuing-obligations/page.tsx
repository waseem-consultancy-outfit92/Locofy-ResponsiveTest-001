import { ContinuingObligationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContinuingObligationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Continuing Obligations`}
      src={ContinuingObligationsImage}
      backRoute="/access-rulebook"
    />
  );
};

export default ContinuingObligationsPage;
