import { ContactInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ContactInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Contact Information`}
      src={ContactInformationImage}
      backRoute="/software-vendor-application-form"
    />
  );
};

export default ContactInformationPage;
