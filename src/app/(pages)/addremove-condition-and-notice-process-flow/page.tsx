import { AddRemoveConditionAndNoticeProcessFlowImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AddRemoveConditionAndNoticeProcessFlowPage = () => {
  return (
    <CommonPage
        pageTitle={`Manage Condition and Notice`}
      src={AddRemoveConditionAndNoticeProcessFlowImage}
      backRoute="/what-needs-to-be-registered"
    />
  );
};

export default AddRemoveConditionAndNoticeProcessFlowPage;
