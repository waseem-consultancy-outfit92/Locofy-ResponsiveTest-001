import { IgSalesiteFrontendApplicationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgSalesiteFrontendApplicationPage = () => {
  return (
    <CommonPage
      pageTitle={`IG SaleSite Frontend Application`}
      src={IgSalesiteFrontendApplicationImage}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default IgSalesiteFrontendApplicationPage;
