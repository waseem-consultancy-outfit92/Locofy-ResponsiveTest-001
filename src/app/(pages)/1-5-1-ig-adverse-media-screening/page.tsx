import { IgAdverseMediaScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgAdverseMediaScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgAdverseMediaScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgAdverseMediaScreeningPage;
