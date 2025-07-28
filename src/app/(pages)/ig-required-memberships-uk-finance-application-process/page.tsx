import { IgRequiredMembershipsUkFinanceApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredMembershipsUkFinanceApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Application Process`}
      src={IgRequiredMembershipsUkFinanceApplicationProcessImage}
      backRoute="/ig-required-memberships-uk-finance"
    />
  );
};

export default IgRequiredMembershipsUkFinanceApplicationProcessPage;
