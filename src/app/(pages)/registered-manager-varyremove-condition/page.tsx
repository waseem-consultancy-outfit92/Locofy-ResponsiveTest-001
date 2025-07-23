import { RegisteredManagerVaryRemoveConditionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RegisteredManagerVaryRemoveConditionPage = () => {
  return (
    <CommonPage
      pageTitle={`Registered Manager – Vary/Remove Condition`}
      src={RegisteredManagerVaryRemoveConditionImage}
      backRoute="/add-remove-condition-and-notice-process-flow"
    />
  );
};

export default RegisteredManagerVaryRemoveConditionPage;
