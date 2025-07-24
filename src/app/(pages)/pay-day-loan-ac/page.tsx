import { PayDayLoanAcImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PayDayLoanAcPage = () => {
  return (
    <CommonPage
      pageTitle="Payday Loans"
      src={PayDayLoanAcImage}
      backRoute="/pay-day-loan"
    />
  );
};

export default PayDayLoanAcPage;
