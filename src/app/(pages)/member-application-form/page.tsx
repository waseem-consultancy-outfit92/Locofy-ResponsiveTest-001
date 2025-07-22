import { MemberApplicationFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Applicant Information (Section 1)",
    title: "Applicant Information (Section 1)",
    href: "/applicant-information-section-1",
    coords: "22,653,552,726",
    shape: "rect",
  },
  {
    alt: "Services Required (Section 2)",
    title: "Services Required (Section 2)",
    href: "/section-2-services-required",
    coords: "24,1857,505,1934",
    shape: "rect",
  },
  {
    alt: "Regulatory Status (Section 3)",
    title: "Regulatory Status (Section 3)",
    href: "/section-3-regulatory-status",
    coords: "20,2488,510,2564",
    shape: "rect",
  },
  {
    alt: "Compliance (Section 4)",
    title: "Compliance (Section 4)",
    href: "/section-4-compliance",
    coords: "20,2992,423,3068",
    shape: "rect",
  },
  {
    alt: "Contact Information (Section 5)",
    title: "Contact Information (Section 5)",
    href: "/section-5-contact-information",
    coords: "19,3373,542,3459",
    shape: "rect",
  },
  {
    alt: "Billing Details (Section 6)",
    title: "Billing Details (Section 6)",
    href: "/section-6-billing-details",
    coords: "29,3653,447,3727",
    shape: "rect",
  },
  {
    alt: "Requested Markets (Section 7)",
    title: "Requested Markets (Section 7)",
    href: "/section-7-requested-markets",
    coords: "17,3922,524,4010",
    shape: "rect",
  },
  {
    alt: "Clearing Arrangements (Section 8)",
    title: "Clearing Arrangements (Section 8)",
    href: "/section-8-clearing-arrangements",
    coords: "14,4829,583,4906",
    shape: "rect",
  },
  {
    alt: "Connectivity (Section 9)",
    title: "Connectivity (Section 9)",
    href: "/section-9-connectivity",
    coords: "25,5191,436,5263",
    shape: "rect",
  },
  {
    alt: "Applicant Declaration",
    title: "Applicant Declaration",
    href: "/applicant-declaration",
    coords: "19,6161,407,6248",
    shape: "rect",
  },
  {
    alt: "Trading Profile Contacts (Appendix 1)",
    title: "Trading Profile Contacts (Appendix 1)",
    href: "/appendix-1-trading-profile-contacts",
    coords: "20,6971,621,7069",
    shape: "rect",
  },
];


const MemberApplicationFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Member Application Form`}
      image={MemberApplicationFormImage}
      backRoute="/legal-agreements"
      areas={areas}
      amendmentButtonTitle1="Reference Doc"
      amendmentButtonRoute1="https://aquis-public-files.s3.eu-west-2.amazonaws.com/pdf_assets/Member+Application+Form+-+Aquis+Exchange+PLC.pdf"
    />
  );
};

export default MemberApplicationFormPage;
