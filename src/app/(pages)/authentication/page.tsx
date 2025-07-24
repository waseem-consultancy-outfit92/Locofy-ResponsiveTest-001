import { AuthenticationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AuthenticationPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Authentication `}
      src={AuthenticationImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default AuthenticationPage;
