import { ViewIntegration5251Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ViewIntegration5251Page = () => {
  return (
    <CommonPage
      pageTitle={`View Integration 5.2.5.1`}
      src={ViewIntegration5251Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default ViewIntegration5251Page;
