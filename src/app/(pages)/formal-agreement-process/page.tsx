import { FormalAgreementProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormalAgreementProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Formal Agreement Process`}
      src={FormalAgreementProcessImage}
      backRoute="/connectivity-order-form"
    />
  );
};

export default FormalAgreementProcessPage;
