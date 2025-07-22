import { MacOrderFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Applicant Information",
    title: "Applicant Information",
    href: "/applicant-information",
    coords: "31,833,412,886",
    shape: "rect",
  },
  {
    alt: "Requirements & Agreements",
    title: "Requirements & Agreements",
    href: "/requirements-agreements",
    coords: "29,1353,502,1414",
    shape: "rect",
  },
];

const MacOrderFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`MaC Order Form`}
      image={MacOrderFormImage}
      backRoute="/legal-agreements"
      areas={areas}
    />
  );
};

export default MacOrderFormPage;
