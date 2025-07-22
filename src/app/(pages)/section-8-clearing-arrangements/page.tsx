import { Section8ClearingArrangementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section8ClearingArrangementsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 8: Clearing Arrangements`}
      src={Section8ClearingArrangementsImage}
      backRoute="/member-application-form"
    />
  );
};

export default Section8ClearingArrangementsPage;
