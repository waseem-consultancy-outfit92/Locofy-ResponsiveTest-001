import { PurchaseOrTransferOfExistingLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurchaseOrTransferOfExistingLocationSPage = () => {
  return (
    <CommonPage
      pageTitle={`Purchase or transfer of existing location(s)`}
      src={PurchaseOrTransferOfExistingLocationImage}
      backRoute="/add-location"
    />
  );
};

export default PurchaseOrTransferOfExistingLocationSPage;
