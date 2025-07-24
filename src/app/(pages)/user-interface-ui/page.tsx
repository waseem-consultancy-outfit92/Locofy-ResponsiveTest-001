import { UserInterfaceUiImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserInterfaceUiPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / User Interface (UI) `}
      src={UserInterfaceUiImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default UserInterfaceUiPage;
