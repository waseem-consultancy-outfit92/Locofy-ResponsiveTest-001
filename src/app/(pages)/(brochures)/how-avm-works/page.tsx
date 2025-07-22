import { HowAVMWorksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HowAVMWorksPage = () => {
  return (
    <CommonPage
      pageTitle={`How AVM Works (Process)`}
      src={HowAVMWorksImage}
      backRoute="/aquis-vwap-match"
    />
  );
};

export default HowAVMWorksPage;
