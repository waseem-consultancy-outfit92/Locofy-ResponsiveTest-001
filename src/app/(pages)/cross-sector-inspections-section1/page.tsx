import { CrossSectorInspectionsImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrossSectorInspectionsPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Cross-Sector Inspections`}
      src={CrossSectorInspectionsImage1}
      backRoute="/care-quality-commission"
    />
  );
};

export default CrossSectorInspectionsPage1;
