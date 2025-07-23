import { RequirementsAgreementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RequirementsAgreementsPage = () => {
  return (
    <CommonPage
      pageTitle={`Requirements & Agreements`}
      src={RequirementsAgreementsImage}
      backRoute="/mac-order-form"
    />
  );
};

export default RequirementsAgreementsPage;
