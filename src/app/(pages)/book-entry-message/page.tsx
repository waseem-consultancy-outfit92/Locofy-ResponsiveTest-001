import { BookEntryMessageImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const BookEntryMessagePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Book Entry Message `}
      src={BookEntryMessageImage}
      backRoute="/aquis-market-data-technical-specification"
      amendmentButtonRoute="/aquis-market-data-technical-specification"
    />
  );
};

export default BookEntryMessagePage;
