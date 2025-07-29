import { IgRequiredMembershipsCsaCloudSecurityAllianceApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredMembershipsCsaCloudSecurityAllianceApplicationProcessPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Application Process`}
        src={
          IgRequiredMembershipsCsaCloudSecurityAllianceApplicationProcessImage
        }
        backRoute="/ig-required-memberships-csa-cloud-security-alliance"
      />
    );
  };

export default IgRequiredMembershipsCsaCloudSecurityAllianceApplicationProcessPage;
