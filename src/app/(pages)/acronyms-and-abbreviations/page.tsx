import { acronymsAndAbbreviationsImg } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const AcronymsAndAbbreviations = () => {
  return (
    <CommonImgMapPage
      backRoute="/fcs-annexes"
      pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Acronyms & Abbreviations"
      image={acronymsAndAbbreviationsImg}
    />
  );
};

export default AcronymsAndAbbreviations;
