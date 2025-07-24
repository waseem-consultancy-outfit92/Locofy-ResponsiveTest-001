import { TradeCaptureReportAcknowledgementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TradeCaptureReportAcknowledgementPage = () => {
  return (
    <CommonPage
      pageTitle={`Trade Capture Report Acknowledgement`}
      src={TradeCaptureReportAcknowledgementImage}
      backRoute="/drop-copy-specifications"
    />
  );
};

export default TradeCaptureReportAcknowledgementPage;
