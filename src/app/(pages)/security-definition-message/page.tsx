import { SecurityDefinitionMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SecurityDefinitionMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Security Definition Message`}
      src={SecurityDefinitionMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default SecurityDefinitionMessagePage;
