import { StorageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StoragePage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Storage `}
      src={StorageImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default StoragePage;
