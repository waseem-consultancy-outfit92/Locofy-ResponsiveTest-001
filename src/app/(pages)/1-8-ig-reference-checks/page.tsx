import { IgReferenceChecksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgReferenceChecksPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgReferenceChecksImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgReferenceChecksPage;
