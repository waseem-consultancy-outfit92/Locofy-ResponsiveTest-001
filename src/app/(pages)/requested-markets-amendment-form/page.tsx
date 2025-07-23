import { RequestedMarketsAmendmentFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Requested Markets",
    title: "Requested Markets",
    href: "/requested-markets",
    coords: "32,1438,383,1520",
    shape: "rect",
  },
  {
    alt: "Form Submission Details",
    title: "Form Submission Details",
    href: "/form-submission-details",
    coords: "26,2468,455,2550",
    shape: "rect",
  },
];

const RequestedMarketsAmendmentFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Requested Markets Amendment Form`}
      image={RequestedMarketsAmendmentFormImage}
      backRoute="/legal-agreements"
      areas={areas}
    />
  );
};

export default RequestedMarketsAmendmentFormPage;
