import { DefinitionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DefinitionPage = () => {
  return (
    <CommonPage
      pageTitle={`Definition`}
      src={DefinitionImage}
      backRoute="/access-rulebook"
    />
  );
};

export default DefinitionPage;
