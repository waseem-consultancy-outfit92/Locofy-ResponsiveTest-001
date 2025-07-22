"use client";
import { MultiPathPage } from "@/components";
import {
  img1RulesAndFeesImage,
  img2RulesAndFeesImage,
  img3RulesAndFeesImage,
  img4RulesAndFeesImage
} from "@/assets";
import React from "react";

const RulesAndFeesPageData = [
  {
    key: "rules-1",
    link: "/access-rulebook",
    icon: img1RulesAndFeesImage,
    title: "Rulebook (English) UK",
  },
  {
    key: "rules-2",
    link: "/aquis-exchange-fee-schedule",
    icon: img2RulesAndFeesImage,
    title: "Fee Schedule - Effective 1 April 2025",
  },
  {
    key: "rules-3",
    link: "/aquis-exchange-fair-usage-policy",
    icon: img3RulesAndFeesImage,
    title: "Fair Usage Policy",
  },
  {
    key: "rules-4",
    link: "/liquidity-provider-scheme",
    icon: img4RulesAndFeesImage,
    title: "Liquidity Provider Scheme",
  }
];

const RulesAndFeesPage = () => {
  return (
    <MultiPathPage
      arrayData={RulesAndFeesPageData}
      pageTitle="Rules and Fees"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default RulesAndFeesPage;
