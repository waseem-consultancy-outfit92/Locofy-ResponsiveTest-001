import { HashInCryptoImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HashInCryptoPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Hash in Crypto`}
      src={HashInCryptoImage}
      backRoute="/web3-applications-in-crypto"
    />
  );
};

export default HashInCryptoPage;
