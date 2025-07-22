import { DataTypesImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DataTypesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Data Types`}
      src={DataTypesImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default DataTypesPage;
