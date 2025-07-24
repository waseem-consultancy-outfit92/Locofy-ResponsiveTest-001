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
            pageTitle="Scope of registration"
            backRoute="/"
        />
    );
};

export default ScopeOfRegistrationPage;
