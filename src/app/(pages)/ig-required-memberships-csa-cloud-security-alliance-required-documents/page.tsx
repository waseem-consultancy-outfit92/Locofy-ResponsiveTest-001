import { IgRequiredMembershipsCsaCloudSecurityAllianceRequiredDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgRequiredMembershipsCsaCloudSecurityAllianceRequiredDocumentsPage =
  () => {
    return (
      <CommonPage
        pageTitle={`Required Documents`}
        src={
          IgRequiredMembershipsCsaCloudSecurityAllianceRequiredDocumentsImage
        }
        backRoute="/ig-required-memberships-csa-cloud-security-alliance"
      />
    );
  };

export default IgRequiredMembershipsCsaCloudSecurityAllianceRequiredDocumentsPage;
