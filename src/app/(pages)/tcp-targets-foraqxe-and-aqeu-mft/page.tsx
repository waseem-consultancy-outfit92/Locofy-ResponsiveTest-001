import { TCPTargetsForAQXEAndAQEUMTFImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TCPTargetsForAQXEAndAQEUMTFPage = () => {
  return (
    <CommonPage
      pageTitle={`TCP Targets for AQXE and AQEU MTF`}
      src={TCPTargetsForAQXEAndAQEUMTFImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default TCPTargetsForAQXEAndAQEUMTFPage;
