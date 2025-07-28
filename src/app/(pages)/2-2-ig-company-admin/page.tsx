import { IgCompanyAdminImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgCompanyAdminPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgCompanyAdminImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgCompanyAdminPage;
