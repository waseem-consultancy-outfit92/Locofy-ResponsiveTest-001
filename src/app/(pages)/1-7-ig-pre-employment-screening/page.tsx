import { IgPreEmploymentScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgPreEmploymentScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgPreEmploymentScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgPreEmploymentScreeningPage;
