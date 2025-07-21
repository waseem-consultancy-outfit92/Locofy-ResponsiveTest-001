import { DisclosureAndTransparencyObligationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisclosureAndTransparencyObligationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Disclosure And Transparency Obligations`}
      src={DisclosureAndTransparencyObligationsImage}
      backRoute="/access-rulebook"
    />
  );
};

export default DisclosureAndTransparencyObligationsPage;
