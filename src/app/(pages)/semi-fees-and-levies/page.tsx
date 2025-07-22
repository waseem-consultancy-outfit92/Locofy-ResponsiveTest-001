import { FeesAndLeviesSec3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SemiFeesAndLeviesPage = () => {
  return (
    <CommonPage
      pageTitle="Fees and levies "
      src={FeesAndLeviesSec3Image}
      backRoute="/semi"
    />
  );
};

export default SemiFeesAndLeviesPage;
