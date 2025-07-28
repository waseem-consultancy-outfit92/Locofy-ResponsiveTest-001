import { IgIdentityInvestigationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgIdentityInvestigationPage = () => {
  return (
    <CommonPage
      pageTitle={`1.6 IG Identity Investigation`}
      src={IgIdentityInvestigationImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgIdentityInvestigationPage;
