import { IgEmployerReferenceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgEmployerReferencePage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgEmployerReferenceImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgEmployerReferencePage;
