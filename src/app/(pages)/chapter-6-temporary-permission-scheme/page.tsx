import { Chapter6TemporaryPermissionSchemeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter6TemporaryPermissionSchemePage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 6: Temporary Permission Scheme`}
      src={Chapter6TemporaryPermissionSchemeImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter6TemporaryPermissionSchemePage;
