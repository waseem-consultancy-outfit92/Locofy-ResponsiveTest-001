"use client";
import { MultiPathPage } from "@/components";
import {
  MarketDataImage1,
  MarketDataImage2,
  MarketDataImage3,
  MarketDataImage4,
  MarketDataImage5,
} from "@/assets";
import React from "react";

const MarketDataPageData = [
  {
    key: "market-data-1",
    link: "/market-data-order-form",
    icon: MarketDataImage1,
    title: "Market Data Order Form - Effective 1 October 2024",
  },
  {
    key: "market-data-2",
    link: "/market-data-fee-schedule",
    icon: MarketDataImage2,
    title: "Fee Schedule (Market Data) - Effective June 2025 ",
  },
  {
    key: "market-data-3",
    link: "/market-data-terms-and-conditions",
    icon: MarketDataImage3,
    title: "Market Data Terms and Conditions - Effective 1 January 2025 ",
  },
  {
    key: "market-data-4",
    link: "/market-data-audit-policy",
    icon: MarketDataImage4,
    title: "Market Data Audit Policy - Effective 1 June 2024",
  },
  {
    key: "market-data-5",
    link: "/eu-market-data-transparency-disclosure",
    icon: MarketDataImage5,
    title: "EU Market Data Transparency Disclosure",
  },
];

const MarketDataPage = () => {
  return (
    <MultiPathPage
      arrayData={MarketDataPageData}
      pageTitle="Market Data"
      backRoute="/aqse-documents"
    />
  );
};

export default MarketDataPage;
