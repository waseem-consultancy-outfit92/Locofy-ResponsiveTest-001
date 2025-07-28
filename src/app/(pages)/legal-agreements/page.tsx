"use client";
import { MultiPathPage } from "@/components";
import {
  img1LegalAgreementsImage,
  img2LegalAgreementsImage,
  img3LegalAgreementsImage,
  img4LegalAgreementsImage,
  img5LegalAgreementsImage,
  img6LegalAgreementsImage,
  img7LegalAgreementsImage,
  img8LegalAgreementsImage,
  img9LegalAgreementsImage,
} from "@/assets";
import React from "react";

const LegalAgreementsPageData = [
  {
    key: "legal-1",
    link: "/member-participation-agreement",
    icon: img1LegalAgreementsImage,
    title: "Member Participation Agreement",
  },
  {
    key: "legal-2",
    link: "/member-application-form",
    icon: img2LegalAgreementsImage,
    title: "Member Application Form",
  },
  {
    key: "legal-3",
    link: "/requested-markets-amendment-form",
    icon: img3LegalAgreementsImage,
    title: "Requested Markets Amendment Form",
  },
  {
    key: "legal-4",
    link: "/liquidity-provider-addendum",
    icon: img4LegalAgreementsImage,
    title: "Liquidity Provider Addendum",
  },
  {
    key: "legal-5",
    link: "/transaction-reporting-addendum",
    icon: img5LegalAgreementsImage,
    title: "Transaction Reporting Addendum",
  },
  {
    key: "legal-6",
    link: "/mac-order-form",
    icon: img6LegalAgreementsImage,
    title: "MaC Order Form",
  },
  {
    key: "legal-7",
    link: "/software-vendor-application-form",
    icon: img7LegalAgreementsImage,
    title: "Software Vendor Application Form",
  },
  {
    key: "legal-8",
    link: "/connectivity-order-form",
    icon: img8LegalAgreementsImage,
    title: "Connectivity Order Form",
  },
  {
    key: "legal-9",
    link: "/connectivity-services-terms-and-conditions",
    icon: img9LegalAgreementsImage,
    title: "Connectivity Services Terms and Conditions",
  },
];

const LegalAgreementsPage = () => {
  return (
    <MultiPathPage
      arrayData={LegalAgreementsPageData}
      pageTitle="Legal Agreements"
      backRoute="/aqse-documents"
    />
  );
};

export default LegalAgreementsPage;
