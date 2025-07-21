import { Chapter10SafeguardingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter10SafeguardingPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 10: Safeguarding `}
      src={Chapter10SafeguardingImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter10SafeguardingPage;
