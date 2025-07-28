import { IgKycGeolocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKycGeolocationPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKycGeolocationImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKycGeolocationPage;
