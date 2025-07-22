import { FeeScheduleDataAndLicenseFeesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeeScheduleDataAndLicenseFeesPage = () => {
  return (
    <CommonPage
      pageTitle={`DATA AND LICENCE FEES`}
      src={FeeScheduleDataAndLicenseFeesImage}
      backRoute="/market-data-fee-schedule"
    />
  );
};

export default FeeScheduleDataAndLicenseFeesPage;
