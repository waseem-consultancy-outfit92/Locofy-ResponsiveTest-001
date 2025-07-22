import { AddressesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AddressesPage = () => {
  return (
    <CommonPage pageTitle={`Addresses`} src={AddressesImage} backRoute="/" />
  );
};

export default AddressesPage;
