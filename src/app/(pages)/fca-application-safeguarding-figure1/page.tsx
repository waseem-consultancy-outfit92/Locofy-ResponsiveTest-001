import { FcaApplicationSafeguardingFigure1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FcaApplicationSafeguardingFigure1Page = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / Safeguarding`}
      src={FcaApplicationSafeguardingFigure1Image}
      backRoute="/Chapter9-Capital-resources-and-requirements"
    />
  );
};

export default FcaApplicationSafeguardingFigure1Page;
