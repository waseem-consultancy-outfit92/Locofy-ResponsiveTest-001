import { System5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const System5Page = () => {
  return (
    <CommonPage
      pageTitle={`System 5`}
      src={System5Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default System5Page;
