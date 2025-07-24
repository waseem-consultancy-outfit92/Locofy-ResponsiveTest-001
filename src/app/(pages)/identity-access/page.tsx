import { IdentityAccessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IdentityAccessPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Identity & Access `}
      src={IdentityAccessImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default IdentityAccessPage;
