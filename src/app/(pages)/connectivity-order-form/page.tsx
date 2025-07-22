import { ConnectivityOrderFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Company Information",
    title: "Company Information",
    href: "/company-information",
    coords: "24,421,430,495",
    shape: "rect",
  },
  {
    alt: "Connectivity Contact Information",
    title: "Connectivity Contact Information",
    href: "/connectivity-contact-information",
    coords: "17,1028,584,1108",
    shape: "rect",
  },
  {
    alt: "Trading Ports Required (If connecting for trading purposes, in Production)",
    title: "Trading Ports Required (If connecting for trading purposes, in Production)",
    href: "/trading-ports-required",
    coords: "27,2782,1134,2871",
    shape: "rect",
  },
  {
    alt: "Formal Agreement Process",
    title: "Formal Agreement Process",
    href: "/formal-agreement-process",
    coords: "25,3823,502,3918",
    shape: "rect",
  },
];


const ConnectivityOrderFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Connectivity Order Form`}
      image={ConnectivityOrderFormImage}
      backRoute="/legal-agreements"
      areas={areas}
      amendmentButtonTitle1="Reference Doc"
      amendmentButtonRoute1="https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Exchange_Connectivity_Order_Form_March_2025_c8d6d4eebe.pdf"
    />
  );
};

export default ConnectivityOrderFormPage;
