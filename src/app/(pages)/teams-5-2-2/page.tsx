import { Teams522Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Teams522Page = () => {
  return (
    <CommonPage
      pageTitle={`Teams 5.2.2`}
      src={Teams522Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default Teams522Page;
