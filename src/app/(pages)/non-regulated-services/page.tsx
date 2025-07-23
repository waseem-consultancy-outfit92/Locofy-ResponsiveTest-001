import { NonRegulatedServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NonRegulatedServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Domiciliary Dental Only`}
      src={NonRegulatedServicesImage}
      backRoute="/what-needs-to-be-registered"
    />
  );
};

export default NonRegulatedServicesPage;
