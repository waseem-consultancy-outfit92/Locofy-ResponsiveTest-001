import { VerificationStatus5212Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const VerificationStatus5212Page = () => {
  return (
    <CommonPage
      pageTitle={`Verification Status 5.2.1.2`}
      src={VerificationStatus5212Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default VerificationStatus5212Page;
