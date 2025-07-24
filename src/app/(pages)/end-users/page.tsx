import { EndUsersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EndUsersPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Roles / End Users `}
      src={EndUsersImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default EndUsersPage;
