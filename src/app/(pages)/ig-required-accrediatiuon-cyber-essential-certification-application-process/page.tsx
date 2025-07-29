import { IgRequiredAccrediatiuonCyberEssentialCertificationApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredAccrediatiuonCyberEssentialCertificationApplicationProcessPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Application Process`}
        src={
          IgRequiredAccrediatiuonCyberEssentialCertificationApplicationProcessImage
        }
        backRoute="/ig-required-accrediatiuon-cyber-essential-certification"
      />
    );
  };

export default IgRequiredAccrediatiuonCyberEssentialCertificationApplicationProcessPage;
