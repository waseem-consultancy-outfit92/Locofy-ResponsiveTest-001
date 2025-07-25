import { RequiredDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RequiredDocumentsPage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={RequiredDocumentsImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default RequiredDocumentsPage;
