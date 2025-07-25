import { PurposeOfProductCertificationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurposeOfProductCertificationPage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={PurposeOfProductCertificationImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default PurposeOfProductCertificationPage;
