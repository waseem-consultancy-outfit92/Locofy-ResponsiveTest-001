import { ApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Validity of the Certificate`}
      src={ApplicationProcessImage}
      backRoute="/ig-required-license-disclosure-and-baring-services-dbs"
    />
  );
};

export default ApplicationProcessPage;
