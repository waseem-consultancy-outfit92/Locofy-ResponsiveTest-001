import { IgKybTransactionScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKybTransactionScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKybTransactionScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKybTransactionScreeningPage;
