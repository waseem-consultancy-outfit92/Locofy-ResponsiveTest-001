import { IgRequiredAccrediatiuonSoc2ApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredAccrediatiuonSoc2ApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Application Process`}
      src={IgRequiredAccrediatiuonSoc2ApplicationProcessImage}
      backRoute="/ig-required-accrediatiuon-soc-2-compliance"
    />
  );
};

export default IgRequiredAccrediatiuonSoc2ApplicationProcessPage;
