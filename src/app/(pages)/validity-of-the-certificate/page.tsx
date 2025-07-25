import { ValidityOfTheCertificateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ValidityOfTheCertificatePage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={ValidityOfTheCertificateImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default ValidityOfTheCertificatePage;
