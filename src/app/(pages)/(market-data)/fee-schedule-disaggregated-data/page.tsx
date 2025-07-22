import { FeeScheduleDisaggregatedDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeeScheduleDisaggregatedDataPage = () => {
  return (
    <CommonPage
      pageTitle={`DISAGGREGATED DATA`}
      src={FeeScheduleDisaggregatedDataImage}
      backRoute="/market-data-fee-schedule"
    />
  );
};

export default FeeScheduleDisaggregatedDataPage;
