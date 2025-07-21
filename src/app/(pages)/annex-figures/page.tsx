import { annexFiguresImg } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const AnnexFigures = () => {
  return (
    <CommonImgMapPage
      backRoute="/fcs-annexes"
      pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Annex Figures"
      image={annexFiguresImg}
    />
  );
};

export default AnnexFigures;
