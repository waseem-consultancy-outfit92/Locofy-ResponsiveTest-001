import { Section9ConnectivityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section9ConnectivityPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 9: Connectivity`}
      src={Section9ConnectivityImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section9ConnectivityPage;
