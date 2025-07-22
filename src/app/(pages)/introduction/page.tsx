import { IntroductionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IntroductionPage = () => {
  return (
    <CommonPage
      pageTitle={`Introduction`}
      src={IntroductionImage}
      backRoute="/access-rulebook"
    />
  );
};

export default IntroductionPage;
