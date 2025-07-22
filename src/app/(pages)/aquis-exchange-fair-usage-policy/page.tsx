import { AquisExchangeFairUsagePolicyImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AquisExchangeFairUsagePolicyPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Aquis Exchange Fair Usage Policy`}
      src={AquisExchangeFairUsagePolicyImage}
      backRoute="/rules-and-fees"
      amendmentButtonRoute="https://s3.eu-west-2.amazonaws.com/aquis-public-files/pdf_assets/Aquis+Exchange+Fair+Usage+Policy+Feb19+v2.0.pdf"
      amendmentButtonTitle="Reference Document"
    />
  );
};

export default AquisExchangeFairUsagePolicyPage;
