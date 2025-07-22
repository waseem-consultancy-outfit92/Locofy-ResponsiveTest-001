import { LoginMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LoginMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Login Message`}
      src={LoginMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default LoginMessagePage;
