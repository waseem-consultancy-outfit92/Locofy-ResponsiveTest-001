import { ModificationReasonsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ModificationReasonsPage = () => {
  return (
    <CommonPage
      pageTitle={`Modification Reasons `}
      src={ModificationReasonsImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default ModificationReasonsPage;
