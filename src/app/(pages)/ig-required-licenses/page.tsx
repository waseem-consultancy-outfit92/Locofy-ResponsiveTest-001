import { IgRequiredLicensesImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "IG Required License Data Protection Principles",
    title: "IG Required License Data Protection Principles",
    href: "/ig-required-license-data-protection-principles",
    coords: "86,130,535,197",
    shape: "rect",
  },
  {
    alt: "/disclosure-and-baring-services-dbs",
    href: "/ig-required-license-disclosure-and-baring-services-dbs",
    title: "Disclosure and Baring Services (DBS)",
    coords: "76,738,688,800",
    shape: "rect",
  },
  {
    alt: "/gdpr-compliance-general-data-protection-regulation",
    href: "/ig-required-license-gdpr-compliance-general-data-protection-regulation",
    title: "GDPR Compliance (General Data Protection Regulation)",
    coords: "84,1450,981,1515",
    shape: "rect",
  },
  {
    alt: "/amld-5th-anti-money-laundering-directive",
    href: "/ig-required-license-amld-5th-anti-money-laundering-directive",
    title: "AMLD (5th Anti-Money Laundering Directive)",
    coords: "79,1991,825,2052",
    shape: "rect",
  },
  {
    alt: "IG Required License NIST (National Institute of Standards and Technology)",
    title:
      "IG Required License NIST (National Institute of Standards and Technology)",
    href: "/ig-required-license-nist-national-institute-of-standards-and-technology",
    coords: "74,2549,939,2613",
    shape: "rect",
  },
  {
    alt: "IG Required License FCA (Financial Conduct Authority)",
    title: "IG Required License FCA (Financial Conduct Authority)",
    href: "/ig-required-license-fca-financial-conduct-authority",
    coords: "84,3662,657,3727",
    shape: "rect",
  },
];

const IgRequiredLicensesPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`IG Required Licenses`}
      image={IgRequiredLicensesImage}
      backRoute="/identity-gram"
      areas={areas}
    />
  );
};

export default IgRequiredLicensesPage;
