import { SuspendingCancellingAndRestoringTradingAndAdmissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SuspendingCancellingAndRestoringTradingAndAdmissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Suspending, Cancelling And Restoring Trading And Admission`}
      src={SuspendingCancellingAndRestoringTradingAndAdmissionImage}
      backRoute="/access-rulebook"
    />
  );
};

export default SuspendingCancellingAndRestoringTradingAndAdmissionPage;
