import { ProtocolTechnicalSpecificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProtocolTechnicalSpecificationPage = () => {
  return (
    <CommonPage
      pageTitle={`Restricted Orders `}
      src={ProtocolTechnicalSpecificationImage}
      backRoute="/protocol-technical-specification"
    />
  );
};

export default ProtocolTechnicalSpecificationPage;
