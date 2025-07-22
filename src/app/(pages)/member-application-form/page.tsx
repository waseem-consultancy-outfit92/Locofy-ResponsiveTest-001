import { MemberApplicationFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "",
    coords: "",
    shape: "",
  },
];

const MemberApplicationFormPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Member Application Form`}
      image={MemberApplicationFormImage}
      backRoute="/legal-agreements"
      areas={areas}
    />
  );
};

export default MemberApplicationFormPage;
