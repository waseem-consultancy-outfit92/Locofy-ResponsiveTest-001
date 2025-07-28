
import { web3Icon1, web3Icon2, web3Icon3, web3Icon4 } from "@/assets";
import { MultiPathPage } from "@/components";
import React from "react";


const arrayData = [
  {
    key: "1",
    icon: web3Icon1,
    title: "Crypto Web3 Introduction",
    link: "/web3-introduction",
  },
  {
    key: "2",
    icon: web3Icon2,
    title: "Categories",
    link: "/web3-applications-in-crypto-categories"
  },
  {
    key: "3",
    icon: web3Icon3,
    title: "Hash in Crypto",
    link: "/hash-in-crypto",
  },
  {
    key: "4",
    icon: web3Icon4,
    title: "Gas in Crypto",
    link: "/gas-in-crypto",
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
