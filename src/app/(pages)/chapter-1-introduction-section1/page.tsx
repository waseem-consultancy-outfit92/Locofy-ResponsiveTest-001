import { Chapter1IntroductionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter1IntroductionPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 1. Introduction`}
      src={Chapter1IntroductionImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter1IntroductionPage;
