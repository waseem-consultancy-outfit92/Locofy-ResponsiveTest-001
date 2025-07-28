import { IgSignupProcess2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgSignupProcess2Page = () => {
  return (
    <CommonPage
      pageTitle={`IG Signup Process 2`}
      src={IgSignupProcess2Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default IgSignupProcess2Page;
