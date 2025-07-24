

import React from "react";
import { web3CryptoCategories1, web3CryptoCategories10, web3CryptoCategories11, web3CryptoCategories12, web3CryptoCategories13, web3CryptoCategories14, web3CryptoCategories15, web3CryptoCategories16, web3CryptoCategories2, web3CryptoCategories3, web3CryptoCategories4, web3CryptoCategories5, web3CryptoCategories6, web3CryptoCategories7, web3CryptoCategories8, web3CryptoCategories9, } from "@/assets";
import { MultiPathPage } from "@/components";

const arrayData: any = [
  {
    key: "1",
    icon: web3CryptoCategories1,
    title: "Foundation",
    link: "/foundation",
  },
  {
    key: "2",
    icon: web3CryptoCategories2,
    title: "Authentication",
    link: "/authentication",
  },
  {
    key: "3",
    icon: web3CryptoCategories3,
    title: "Data Ownership",
    link: "/data-ownership",
  },
  {
    key: "4",
    icon: web3CryptoCategories4,
    title: "Transactions",
    link: "/transactions",
  },
  {
    key: "5",
    icon: web3CryptoCategories5,
    title: "Smart Contracts",
    link: "/smart-contracts",
  },
  {
    key: "6",
    icon: web3CryptoCategories6,
    title: "Tokenization",
    link: "/tokenization",
  },
  {
    key: "7",
    icon: web3CryptoCategories7,
    title: "Decentralized Finance",
    link: "/decentralized-finance",
  },
  {
    key: "8",
    icon: web3CryptoCategories8,
    title: "Identity & Access",
    link: "/identity-access",
  },
  {
    key: "9",
    icon: web3CryptoCategories9,
    title: "Governance",
    link: "/governance",
  },
  {
    key: "10",
    icon: web3CryptoCategories10,
    title: "Storage",
    link: "/storage",
  },
  {
    key: "11",
    icon: web3CryptoCategories11,
    title: "Security",
    link: "/security",
  },
  {
    key: "12",
    icon: web3CryptoCategories12,
    title: "Interoperability",
    link: "/interoperability",
  },
  {
    key: "13",
    icon: web3CryptoCategories13,
    title: "User Interface (UI)",
    link: "/user-interface-ui",
  },
  {
    key: "14",
    icon: web3CryptoCategories14,
    title: "Use Cases",
    link: "/use-cases",
  },
  {
    key: "15",
    icon: web3CryptoCategories15,
    title: "Rewards & Incentives",
    link: "/rewards-incentives",
  },
  {
    key: "16",
    icon: web3CryptoCategories16,
    title: "Ecosystem Examples",
    link: "/ecosystem-examples",
  },
];

const Web3ApplicationsInCryptoCategoriesPage = () => {
  return (
    <MultiPathPage
      pageTitle={`Web3 Applications in Crypto Categories`}
      arrayData={arrayData}
      backRoute="/web3-applications-in-crypto"
    />
  );
};

export default Web3ApplicationsInCryptoCategoriesPage;
