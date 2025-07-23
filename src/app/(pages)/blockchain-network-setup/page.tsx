import { BlockchainNetworkSetupImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const BlockchainNetworkSetupPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Web 3 / Roles / Crypto Process`}
      image={BlockchainNetworkSetupImage}
      backRoute="/"
    />
  );
};

export default BlockchainNetworkSetupPage;
