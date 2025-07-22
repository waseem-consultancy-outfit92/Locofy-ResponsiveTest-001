import { ApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`The Application Process`}
      src={ApplicationProcessImage}
      backRoute="/access-rulebook"
    />
  );
};

export default ApplicationProcessPage;
