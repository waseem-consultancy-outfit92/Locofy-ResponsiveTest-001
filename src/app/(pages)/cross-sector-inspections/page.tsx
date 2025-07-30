import { CrossSectorInspectionsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrossSectorInspectionsPage = () => {
  return (
    <CommonPage
      pageTitle={`Cross-Sector Inspections`}
      src={CrossSectorInspectionsImage}
      backRoute="/care-quality-commission"
    />
  );
};

export default CrossSectorInspectionsPage;
