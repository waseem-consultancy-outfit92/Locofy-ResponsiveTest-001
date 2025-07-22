import { SoftwareVendorApplicationFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Company Information",
    title: "Company Information",
    href: "/company-information-1",
    coords: "38,406,429,464",
    shape: "rect",
  },
  {
    alt: "Contact Information",
    title: "Contact Information",
    href: "/contact-information",
    coords: "35,1359,404,1412",
    shape: "rect",
  },
  {
    alt: "Connectivity Services Required",
    title: "Connectivity Services Required",
    href: "/connectivity-services-required",
    coords: "29,1962,535,2014",
    shape: "rect",
  },
];

const SoftwareVendorApplicationFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Software Vendor Application Form`}
      image={SoftwareVendorApplicationFormImage}
      backRoute="/legal-agreements"
      areas={areas}
    />
  );
};

export default SoftwareVendorApplicationFormPage;
