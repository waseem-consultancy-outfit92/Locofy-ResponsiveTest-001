"use client";

import React from "react";

import {
  img1technicalSpeficImage,
  img1technicalSpeficImage1,
  img1technicalSpeficImage2,
  img1technicalSpeficImage3,
  img1technicalSpeficImage4,
  img1technicalSpeficImage5,
  img1technicalSpeficImage6,
} from "@/assets";

import MultiPathOnePage from "@/components/common-page-one-btn";

const ScopeOfRegistrationPageData = [
  {
    key: "scope-1",
    link: "/protocol-technical-specification",
    icon: img1technicalSpeficImage,
    title: "FIX Specifications",
  },
  {
    key: "scope-2",
    link: "/aquis-trading-protocol-atp-specification",
    icon: img1technicalSpeficImage1,
    title: "ATP Specifications",
  },
  {
    key: "scope-3",
    link: "/drop-copy-specifications",
    icon: img1technicalSpeficImage2,
    title: "Drop Copy Specifications",
  },
  {
    key: "scope-3",
    link: "/aquis-market-data-technical-specification",
    icon: img1technicalSpeficImage3,
    title: "Market Data Specifications",
  },
  {
    key: "scope-3",
    link: "/Connectivity-guide",
    icon: img1technicalSpeficImage4,
    title: "Connectivity Guide",
  },
  {
    key: "scope-3",
    link: "/regulatory-transaction-reporting-service-specification",
    icon: img1technicalSpeficImage5,
    title: "Regulatory Transaction Reporting Service Specification",
  },
  {
    key: "scope-3",
    link: "/aquis-short-code-upload-specification",
    icon: img1technicalSpeficImage6,
    title: "Short Code Upload Specification",
  },
];

const ScopeOfRegistrationPage = () => {
    return (
        <MultiPathOnePage
            arrayData={ScopeOfRegistrationPageData}
            pageTitle="Technical Specifications"
            backRoute="/aqse-documents"
            referenceDocLink="/http://extension//peoambfhpepnhlnjdljaicnliicigcpc/content-script/index.html?file=https%253A%252F%252Forcalo-my.sharepoint.com%252Fpersonal%252Fshanulhaq_consultancyoutfit_co_uk%252FDocuments%252FMicrosoft%252520Teams%252520Chat%252520Files%252FAccess_Rulebook_v1_2_April_2023_3936b48356.pdf"
        />
    );
};

export default ScopeOfRegistrationPage;
