import { Integration525Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Integration525Page = () => {
  return (
    <CommonPage
      pageTitle={`Integration 5.2.5`}
      src={Integration525Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default Integration525Page;
