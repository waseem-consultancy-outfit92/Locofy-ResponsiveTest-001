import { IgKybSanctionScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKybSanctionScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKybSanctionScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKybSanctionScreeningPage;
