import { WalletProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WalletProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Roles / Wallet Providers `}
      src={WalletProvidersImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default WalletProvidersPage;
