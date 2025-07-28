import { IgAuthorisedUser4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgAuthorisedUser4Page = () => {
  return (
    <CommonPage
      pageTitle={`IG Authorised User 4`}
      src={IgAuthorisedUser4Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default IgAuthorisedUser4Page;
