import { IgRequiredAccrediatiuonUkasApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredAccrediatiuonUkasApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Application Process`}
      src={IgRequiredAccrediatiuonUkasApplicationProcessImage}
      backRoute="/ig-required-accrediatiuon-ukas"
    />
  );
};

export default IgRequiredAccrediatiuonUkasApplicationProcessPage;
