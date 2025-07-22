import { BookStatusMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const BookStatusMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Book Status Message `}
      src={BookStatusMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default BookStatusMessagePage;
