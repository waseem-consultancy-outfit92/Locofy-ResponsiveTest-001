"use client";
import { MultiPathPage } from "@/components";
import {
  aqseDocument1Image,
  aqseDocument2Image,
  aqseDocument3Image,
  aqseDocument4Image,
  aqseDocument5Image,
  aqseDocument6Image,
} from "@/assets";
import React from "react";

const ScopeOfRegistrationPageData = [
  {
    key: "document-1",
    link: "/first-sentinel-broker-document-aqse-listing-proposal-overview",
    icon: aqseDocument1Image,
    title: "First Sentinel Broker Document",
  },
  {
    key: "document-2",
    link: "/rules-and-fees",
    icon: aqseDocument2Image,
    title: "Rules and Fees",
  },
  {
    key: "document-3",
    link: "/legal-agreements",
    icon: aqseDocument3Image,
    title: "Legal Agreements",
  },
  {
    key: "document-4",
    link: "/technical-specifications",
    icon: aqseDocument4Image,
    title: "Technical Specifications",
  },
  {
    key: "document-5",
    link: "/market-data",
    icon: aqseDocument5Image,
    title: "Market Data",
  },
  {
    key: "document-6",
    link: "/aquis-vwap-match",
    icon: aqseDocument6Image,
    title: "Brochures",
  },
];

const AqseDocumentPage = () => {
  return (
    <MultiPathPage
      arrayData={ScopeOfRegistrationPageData}
      pageTitle="Aqse Document"
      backRoute="/aqse-documents"
    />
  );
};

export default AqseDocumentPage;
