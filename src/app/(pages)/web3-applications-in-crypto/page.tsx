
import { web3Icon1, web3Icon2, web3Icon3, web3Icon4 } from "@/assets";
import { CommonPage, MultiPathPage } from "@/components";
import React from "react";

const arrayData: any = [
  {
    id:1,
    icon: web3Icon1,
    title: "Crypto Web3 Introduction",
  },
  {
    id:2,
    icon: web3Icon2,
    title: "Crypto Web3 Introduction",
  },
  {
    id:3,
    icon: web3Icon3,
    title: "Crypto Web3 Introduction",
  },
  {
    id:4,
    icon: web3Icon4,
    title: "Crypto Web3 Introduction",
  },
];

const Web3ApplicationsInCryptoPage = () => {
  return (
    <MultiPathPage
      arrayData={arrayData}
      pageTitle={`Web3 Applications in Crypto`}
      backRoute="/"
    />
  );
};

export default Web3ApplicationsInCryptoPage;
