import { RequestedMarketsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RequestedMarketsPage = () => {
  return (
    <CommonPage
      pageTitle={`Requested Markets`}
      src={RequestedMarketsImage}
      backRoute="/requested-markets-amendment-form"
    />
  );
};

export default RequestedMarketsPage;
