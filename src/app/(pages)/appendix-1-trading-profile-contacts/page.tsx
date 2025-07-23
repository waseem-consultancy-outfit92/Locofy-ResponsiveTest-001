import { Appendix1TradingProfileContactsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Appendix1TradingProfileContactsPage = () => {
  return (
    <CommonPage
      pageTitle={`Appendix 1: Trading Profile Contacts`}
      src={Appendix1TradingProfileContactsImage}
      backRoute="/member-application-form"
    />
  );
};

export default Appendix1TradingProfileContactsPage;
