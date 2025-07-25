import { IgRequiredMembershipsUkFinanceCostBreakdownImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredMembershipsUkFinanceCostBreakdownPage = () => {
  return (
    <CommonPage
      pageTitle={`Cost Breakdown`}
      src={IgRequiredMembershipsUkFinanceCostBreakdownImage}
      backRoute="/ig-required-memberships-uk-finance"
    />
  );
};

export default IgRequiredMembershipsUkFinanceCostBreakdownPage;
