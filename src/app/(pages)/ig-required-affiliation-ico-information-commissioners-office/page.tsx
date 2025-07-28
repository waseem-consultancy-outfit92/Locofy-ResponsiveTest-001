"use client";
import { MultiPathPage } from "@/components";
import {
    img1IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img2IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img3IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img4IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img5IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img6IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img7IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
    img8IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage
} from "@/assets";
import React from "react";

const IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemPageData = [
    {
        key: "ig-1",
        link: "/ig-required-affiliation-ico-information-commissioners-office-purpose-of-product-certification",
        icon: img1IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Purpose of Product Certification",
    },
    {
        key: "ig-2",
        link: "/ig-required-affiliation-ico-information-commissioners-office-where-to-apply",
        icon: img2IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Where to Apply",
    },
    {
        key: "ig-3",
        link: "/ig-required-affiliation-ico-information-commissioners-office-eligibility-criteria",
        icon: img3IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Eligibility Criteria",
    },
    {
        key: "ig-4",
        link: "/ig-required-affiliation-ico-information-commissioners-office-application-process",
        icon: img4IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Application Process",
    },
    {
        key: "ig-5",
        link: "/ig-required-affiliation-ico-information-commissioners-office-required-documents",
        icon: img5IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Required Documents",
    },
    {
        key: "ig-6",
        link: "/ig-required-affiliation-ico-information-commissioners-office-cost-breakdown",
        icon: img6IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Cost Breakdown",
    },
    {
        key: "ig-7",
        link: "/ig-required-affiliation-ico-information-commissioners-office-timeline-for-certification",
        icon: img7IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Timeline for Certification",
    },
    {
        key: "ig-8",
        link: "/ig-required-affiliation-ico-information-commissioners-office-validity-of-the-certificate",
        icon: img8IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Validity of the Certificate",
    }
];

const igRequiredAffiliationIcoInformationCommissionersOffice = () => {
    return (
        <MultiPathPage
            arrayData={IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemPageData}
            pageTitle="ICO (Information Commissioner’s Office)"
            backRoute="/ig-required-affiliation"
        />
    );
};

export default igRequiredAffiliationIcoInformationCommissionersOffice;
