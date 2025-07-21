import { Chapter2ScopeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter2ScopePage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 2. Scope`}
      src={Chapter2ScopeImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter2ScopePage;
