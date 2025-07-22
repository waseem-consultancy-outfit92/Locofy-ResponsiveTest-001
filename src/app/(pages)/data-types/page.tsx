import { DataTypesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataTypesPage = () => {
  return (
    <CommonPage
      pageTitle={`Data Types`}
      src={DataTypesImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default DataTypesPage;
