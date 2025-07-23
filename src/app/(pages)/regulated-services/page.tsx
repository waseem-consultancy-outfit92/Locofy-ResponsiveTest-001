import { RegulatedServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RegulatedServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Domiciliary Dental Only`}
      src={RegulatedServicesImage}
      backRoute="/what-needs-to-be-registered"
    />
  );
};

export default RegulatedServicesPage;
