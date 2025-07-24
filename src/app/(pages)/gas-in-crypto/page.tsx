import { GasInCryptoImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GasInCryptoPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Gas in Crypto`}
      src={GasInCryptoImage}
      backRoute="/web3-applications-in-crypto"
    />
  );
};

export default GasInCryptoPage;
