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
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-purpose-of-product-certification",
        icon: img1IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Purpose of Product Certification",
    },
    {
        key: "ig-2",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-where-to-apply  ",
        icon: img2IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Where to Apply",
    },
    {
        key: "ig-3",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-eligibility-criteria  ",
        icon: img3IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Eligibility Criteria",
    },
    {
        key: "ig-4",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-application-process  ",
        icon: img4IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Application Process",
    },
    {
        key: "ig-5",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-required-documents  ",
        icon: img5IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Required Documents",
    },
    {
        key: "ig-6",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-cost-breakdown  ",
        icon: img6IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Cost Breakdown",
    },
    {
        key: "ig-7",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-timeline-for-certification  ",
        icon: img7IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Timeline for Certification",
    },
    {
        key: "ig-8",
        link: "/ig-required-affiliation-iapp-international-association-of-privacy-professionals-validity-of-the-certificate  ",
        icon: img8IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemImage,
        title: "Validity of the Certificate",
    }
];

const IgRequiredAffiliationAppInternationalAssociationOfPrivacyProfessionals = () => {
    return (
        <MultiPathPage
            arrayData={IgRequiredAffiliationCifasCreditIndustryFraudAvoidanceSystemPageData}
            pageTitle="IAPP (International Association of Privacy Professionals)"
            backRoute="/ig-required-affiliation"
        />
    );
};

export default IgRequiredAffiliationAppInternationalAssociationOfPrivacyProfessionals;
