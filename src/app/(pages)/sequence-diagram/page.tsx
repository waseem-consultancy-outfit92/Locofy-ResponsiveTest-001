import { SequenceDiagramImage } from "@/assets";
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

const SequenceDiagramPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Sequence Diagram`}
      image={SequenceDiagramImage}
      backRoute="/"
      areas={areas}
    />
  );
};

export default SequenceDiagramPage;
