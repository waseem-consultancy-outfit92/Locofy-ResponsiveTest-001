import { IgRequiredAccrediatiuonUkasCostBreakdownImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredAccrediatiuonUkasCostBreakdownPage = () => {
  return (
    <CommonPage
      pageTitle={`Cost Breakdown`}
      src={IgRequiredAccrediatiuonUkasCostBreakdownImage}
      backRoute="/ig-required-accrediatiuon-ukas"
    />
  );
};

export default IgRequiredAccrediatiuonUkasCostBreakdownPage;
