import { AddRemoveConditionAndNoticeProcessFlowImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AddRemoveConditionAndNoticeProcessFlowPage = () => {
  return (
    <CommonPage
      pageTitle={`Domiciliary Dental Only`}
      src={AddRemoveConditionAndNoticeProcessFlowImage}
      backRoute="/what-needs-to-be-registered"
    />
  );
};

export default AddRemoveConditionAndNoticeProcessFlowPage;
